const Resource=require("../models/resourceModel")




exports.getAllResources=async (req,res)=>{
    const resources=await Resource.find();

    res.status(200).json({resources})
    //res.status(200).json({meessage:"hello"})

}

exports.addResource=async(req,res)=>{
    const data={...req.body}
    try {
        const reources=await Resource.create({...data});
        console.log(data,reources)
        res.send({ status: "ok" });
    } catch (error) {
        res.send({status:"error",error})
    }
}

exports.getAllItems=async (req,res)=>{
    const {Dept}=req.query;
    

    try {
        const resources=await Resource.find({"Department_contact_details.Dept_name":Dept});

    res.send({status:"ok",data:resources})
    } catch (error) {
        res.send({status:"error",message:resources})
    }
    
    //res.status(200).json({meessage:"hello"})

}