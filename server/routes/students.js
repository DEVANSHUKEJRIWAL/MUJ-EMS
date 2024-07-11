const express = require('express')
const studentController = require('../controllers/studentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get("/", studentController.getAllStudents)

router.get("/:batch", studentController.getStudentsByBatch)

router.post("/", studentController.addNewStudent)

module.exports = router

