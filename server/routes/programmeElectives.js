const express = require('express')
const programmeElectiveController = require('../controllers/programmeElectiveController')
const openElectiveController = require("../controllers/openElectiveController.js");
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post("/", programmeElectiveController.addNewProgrammeElective)

router.get("/", programmeElectiveController.getAllProgrammeElectives)

router.get("/:batch", programmeElectiveController.getProgrammeElectivesByBatch)

module.exports = router

