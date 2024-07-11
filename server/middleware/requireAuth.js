const jwt = require('jsonwebtoken')
const Student = require('../models/Student')

const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers
    if (!authorization) {
        return res.status(401).json({error: "Authentication token required"})
    }
    const token = authorization.split(' ')[1]
    try {
        const {regNo} = jwt.verify(token, process.env.SECRET)
        req.user = await Student.findOne({regNo})
        next()
    } catch (e) {
        return res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = requireAuth