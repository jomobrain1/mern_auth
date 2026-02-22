const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/verify", verifyUser);
router.post("/auth/login", loginUser);

module.exports = router;
