const express = require('express')
const router = express.Router()
const {registerUser,loginUser,userDetails} = require('../controllers/userController')

router.post('/',registerUser)
router.post('/login',loginUser)
router.post('/user',userDetails)

module.exports = router
