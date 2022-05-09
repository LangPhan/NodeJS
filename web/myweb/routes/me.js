const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/stored/coures',meController.storedCourses)



module.exports =  router