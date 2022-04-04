const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CourseController.js')

router.post('/store',courseController.store)
router.get('/create',courseController.create)
router.get('/:slug',courseController.show)


module.exports =  router