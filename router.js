//import express
const express= require('express')

//import userController
const userController=require('./controller/userController')

//import projectController
const projectController=require('./controller/projectController')

//import jwtmiddleware
const jwtmiddleware=require('./middleware/jwtmiddleware')

//import multer
const multerconfig=require('./middleware/multerMiddleware')

//instance
const router=new express.Router()

//register
router.post('/register', userController.register)

//login
router.post('/login', userController.login)

//addproject
router.post('/addproject',jwtmiddleware,multerconfig.single("projectImage"),projectController.addProjectController)

//get allproject
router.get('/all-project',projectController.getAllProjectConroller)

//get home projects
router.get('/home-project',projectController.getHomeProjectConroller)

//userproject
router.get('/user-project',jwtmiddleware,projectController.getUserProjectConroller)

//delete user project
router.delete('/remove-userproject/:id',jwtmiddleware,projectController.removeUserProjects)


//update user project
router.put('/update-userproject/:id',jwtmiddleware, multerconfig.single("projectImage"),projectController.updateUserProjectController)

//update user rpofile
router.put('/update-userprofile',jwtmiddleware, multerconfig.single("profile"),userController.editProfileController)
module.exports=router