require("dotenv").config();
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_DB_URL, {
    dbName: process.env.MONGO_DB_NAME
}).then(()=>{
    console.log("mongodb connceted successfully")
})
.catch((err)=>{
    console.log("error while connceting mongodb")
    process.exit(1)
})