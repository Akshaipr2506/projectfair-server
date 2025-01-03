//import express
const express= require('express')

//import userController
const userController=require('./controller/userController')

//import projectController
const projectController=require('./controller/projectController')

//import jwtmiddleware
const jwtmiddleware=require('./middleware/jwtmiddleware')

//instance
const router=new express.Router()

//register
router.post('/register', userController.register)

//login
router.post('/login', userController.login)

//addproject
router.post('/addproject',jwtmiddleware,projectController.addProjectController)

module.exports=router