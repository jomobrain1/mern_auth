const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
  logoutUser,
} = require("../controllers/users.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/verify", verifyUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", isAuthenticated, logoutUser);

module.exports = router;
