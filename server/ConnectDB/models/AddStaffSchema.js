const mongoose=require('mongoose');
const addStaffSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Provide Full Name"]
    },
    department:{
        type:String,
        required:[true,"Provide Department"]
    },
    gender:{
        type:String,
        required:[true,"Provide Gender"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Provide Email"]
    },
    mobile:{
        type:String,
        unique:true,
        required:[true,"Provide Mobile No"]
    },
    photo:{
        type:String,
        required:[true,"Provide Profile Photo"],
        default :""
    },
    dob:{
        type:String,
        required:[true,"Provide Date of birth"]
    },
    doj:{
        type:String,
        required:[true,"Provide Date of joining"]
    },
    city:{
        type:String,
        required:[true,"Provide City"]
    },
    state:{
        type:String,
        required:[true,"Provide State"]
    },
    country:{
        type:String,
        required:[true,"Provide Country"]
    },
    address:{
        type:String,
        required:[true,"Provide Address"]
    }
})
const AddStaffModel=mongoose.model('Staffs',addStaffSchema);
module.exports=AddStaffModel