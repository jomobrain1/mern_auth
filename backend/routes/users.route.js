const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
  logoutUser,
  forgotPassword,
  verifyOTP,
  changePassword,
} = require("../controllers/users.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/verify", verifyUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", isAuthenticated, logoutUser);
router.post("/auth/forgot-password", forgotPassword);
router.post("/auth/verify-otp/:email", verifyOTP);
router.post("/auth/change-password/:email", changePassword);

module.exports = router;
