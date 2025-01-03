const jwtmiddleware=(req,res,next)=>{
    console.log('inside jwt middleware');
    const token=req.headers['authorization']
    console.log(token);
    next()
    
    
}
module.exports=jwtmiddleware 