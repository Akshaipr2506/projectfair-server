//import express
const express= require('express')

//import userController
const userController=require('./controller/userController')

//instance
const router=new express.Router()

//register
router.post('/register', userController.register)

module.exports=router