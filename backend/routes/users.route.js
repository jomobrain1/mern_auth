const express = require("express");
const {
  registerUsers,
  verification,
} = require("../controllers/users.controller");

const router = express.Router();

router.post("/auth/register", registerUsers);
router.post("/auth/verify", verification);

module.exports = router;
