const express = require('express')
const assigmentController = require('../controllers/programElectiveAllotmentController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)


module.exports = router
