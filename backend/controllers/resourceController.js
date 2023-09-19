const Resource=require("../models/resourceModel")




exports.getAllResources=async (req,res)=>{
    const resources=await Resource.find();

    res.status(200).json({resources})
    //res.status(200).json({meessage:"hello"})

}