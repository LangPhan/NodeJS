const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserController')

// router.post('/store',userController.store)
// router.get('/create',userController.create)
router.get('/infor',userController.show)


module.exports =  router