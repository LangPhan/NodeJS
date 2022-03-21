const express = require('express')
const router = express.Router()

const siteController = require('../controllers/SiteController')

router.use('/',siteController.index)
router.use('/search',siteController)

module.exports =  router