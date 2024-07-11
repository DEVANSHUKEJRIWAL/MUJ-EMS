const express = require('express')
const openElectiveController = require('../controllers/openElectiveController.js')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post("/", openElectiveController.addNewOpenElective)

router.get("/", openElectiveController.getAllOpenElectives)

router.get("/:batch", openElectiveController.getOpenElectivesByBatch)

module.exports = router
