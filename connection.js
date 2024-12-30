//import mongoose
const mongoose=require('mongoose')

//connecting
connetionString=process.env.DATABASE
mongoose.connect(connetionString).then((res)=>{
    console.log('MongoDb connected successfully');
    
}).catch((err)=>{
    console.log(`MongoDB connection failed ${err}`);
    
})