const express = require("express");
const { registerUser } = require("../controllers/AuthController");
const { validateRegister } = require("../middleware/Auth");

const router = express.Router();

router.post("/register", validateRegister, registerUser);

module.exports = router;
