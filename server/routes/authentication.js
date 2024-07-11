const express = require('express')
const studentController = require("../controllers/studentController");
const authorizationController = require("../controllers/authenticationController");


const router = express.Router()

router.post("/login", authorizationController.loginUser)

router.post("/signup", authorizationController.signupUser)

module.exports = router