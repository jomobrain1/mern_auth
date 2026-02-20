const express = require("express");
const { registerUsers } = require("../controllers/users.controller");

const router = express.Router();

router.post("/auth/register", registerUsers);

module.exports = router;
