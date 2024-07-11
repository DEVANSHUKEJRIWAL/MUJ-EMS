const express = require('express')
const programmeElectiveAllotmentController = require('../controllers/programmeElectiveAllotmentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//Fetch all allotments of a user
router.get("/", programmeElectiveAllotmentController.getAllAllotmentsOfStudent)

//Add a new allotment of a user
router.post("/", programmeElectiveAllotmentController.addNewAllotment)

//Update an allotment of a user
router.patch("/", programmeElectiveAllotmentController.updateAllotment)


module.exports = router
