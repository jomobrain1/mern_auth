const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { verifyEmail } = require("../emails/verify.email");
const jwt = require("jsonwebtoken");
const Session = require("../models/Session");
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // verifyEmail("23hrjt", email);
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });
    verifyEmail(token, email);
    user.token = token;
    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const verifyUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "The registration token has expired",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Token verification failed",
      });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.token = null;
    user.isVerified = true;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //User exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).json({
        success: false,
        message: "User doest not exist",
      });
    }
    const passwordCheck = await bcrypt.compare(password, userExists.password);
    if (!passwordCheck) {
      return res.status(402).json({
        success: false,
        message: "Incorrect password",
      });
    }
    //  Check for existing session and delete it
    const sessionExists = await Session.findOne({ userId: userExists._id });

    if (sessionExists) {
      await Session.deleteOne({ userId: userExists._id });
    } else {
      // Create a new Session after deleting the first one
      await Session.create({ userId: userExists._id });
    }

    //Generate tokens
    const accessToken = jwt.sign(
      { id: userExists._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "10d",
      },
    );
    const refreshToken = jwt.sign(
      { id: userExists._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      },
    );

    userExists.isLoggedIn = true;
    await userExists.save();

    return res.status(200).json({
      success: true,
      message: `Welcome back ${userExists.username}`,
      accessToken,
      refreshToken,
      data: userExists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { registerUser, verifyUser, loginUser };
