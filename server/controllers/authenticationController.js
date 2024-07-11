const dotenv = require('dotenv').config()
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET

const createToken = (regNo) => {
    return jwt.sign({regNo}, secret_key, {expiresIn: '3d'})
}

const authenticationController = {

    signupUser: async (req, res) => {
        const { email, password, regNo, firstName, lastName, batch} = req.body
        console.log(email, password)
        try {
            const user = await Student.signup(email, password, regNo, firstName, lastName, batch)
            const token = createToken(user._id)
            return res.status(201).json({email, token});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await Student.login(email, password)
            const token = (createToken(user.regNo))
            return res.status(200).json({email, token})
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    },
}

module.exports = authenticationController