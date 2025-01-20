const projects = require("../model/projectModel");
const users = require("../model/userModel");

//add project
exports.addProjectController= async(req,res)=>{
    console.log('inside add project controller');

    const {title,language,github,website,overview}=req.body
    console.log(title,language,github,website,overview);

    const projectImage=req.file.filename
    console.log(projectImage);

    const userId=req.payload

    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json('Project already exists')
        }else{
            const newProject = new projects({
                title,language,github,website,overview,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(error){
        res.status(401).json(`Project adding failed due to ${error}`)
    } 
}

//get all rpojects
exports.getAllProjectConroller= async(req,res)=>{
    const searchKey = req.query.search
  console.log(searchKey);
  const query= {
      language:{
          $regex : searchKey, $options : "i"
      }
  }
  console.log(query);
    try{
        const allProject=await projects.find(query)
        res.status(200).json(allProject)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//get home projects
exports.getHomeProjectConroller= async(req,res)=>{
    try{
        const allProject=await projects.find().limit(3)
        res.status(200).json(allProject)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//get user projects
exports.getUserProjectConroller= async(req,res)=>{
    const userId=req.payload
    try{
        const allProject=await projects.find({userId})
        res.status(200).json(allProject)
    }
    catch(error){
        res.status(401).json(error)
    }
}
//delete user rpoject
exports.removeUserProjects =async(req,res)=>{
    const {id}=req.params
    try{
      await projects.findByIdAndDelete({_id:id})
      res.status(200).json("Project Deleted Successfully`")
  
    }
    catch(error) {
      res.status(401).json(error)
    }
  }

exports.updateUserProjectController =async(req,res)=>{
    const {id}=req.params
    const userId=req.payload

    const {title,language,github,website,overview,projectImage}=req.body
    uploadImg=req.file? req.file.filename:projectImage

    try {
        const existingProject=await projects.findByIdAndUpdate({_id:id},{
            title,
            language,
            github,
            website,
            overview,
            projectImage:uploadImg,
            userId
        },{new:true})
        await existingProject.save()
        res.status(200).json(existingProject)

    } catch (error) {
        res.status(401).json(error)
    }
}