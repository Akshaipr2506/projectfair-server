// import express
const express=require('express')

//import cors
const cors=require('cors')


//import router
const router= require('./router')

// create server
const pfserver=express()

//use the cors
pfserver.use(cors())


//parse the data - returns middleware to pare the data
pfserver.use(express.json())

//use 
pfserver.use(router)

//port to run server
const PORT=4040||process.env.PORT


//listen
pfserver.listen(PORT,()=>{
    console.log(`pfserver is running successfully in port number ${PORT}`);
    
})







// //get
// pfserver.get('/',(req, res)=>{
//     res.send('get request recieved')
//     res.send('end')
// })

// //send
// pfserver.post('/',(req,res)=>{
//     res.send('post request successfull')
// })

// //put
// pfserver.post('/',(req,res)=>{
//     res.send('put request successfull')
// })

// //delete
// pfserver.delete('/',(req,res)=>{
//     res.send('delete request successfull')
// })