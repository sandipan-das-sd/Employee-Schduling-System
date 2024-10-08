const UserModel=require('../ConnectDB/models/RegistrationSchema')
const checkEmail=async(req,res)=>{


try {
    const {email}=req.body
    const user= (await UserModel.findOne({email}))
    if(!user)
        {
            return res.json({
                message:"User Doesn't Exists",
                error:true
            })
        }
        else
        {
            return res.json({
                message:"Email Verified",
                success:true,
                data:user
            })
        }
} catch (error) {
    console.log("Error in Check Email Controler")
    return response.status(500).json({
        message: error.message || error,
        error: true
    });
}
}
module.exports=checkEmail