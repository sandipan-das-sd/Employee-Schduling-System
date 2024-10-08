const mongoose=require('mongoose');
const ConnectDB=async()=>{
try {
    const dbURL=process.env.MONGODB_URL
    //if no DB url is not present in the env 
    if(!dbURL)
        {
            throw new Error ("Mongo Db connection is not defiend in env ")
        }
        else
        {
            await mongoose.connect(dbURL,{

            })
            console.log("Connected to MongoDB")
        }
    
} catch (error) {
    console.log("Error Connecting to the MongoDB",error.message)
}
}
module.exports=ConnectDB