const express = require('express')
const openElectiveAllotmentController = require('../controllers/openElectiveAllotmentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//Fetch all allotments of a user
router.get("/", openElectiveAllotmentController.getAllAllotmentsOfStudent)

//Add a new allotment of a user
router.post("/", openElectiveAllotmentController.addNewAllotment)

//Update an allotment of a user
router.patch("/", openElectiveAllotmentController.updateAllotment)


module.exports = router
