const express = require("express");
const app = express()


// routing
app.use("/",(request , response)=>{
    // response.send("hello world")
    response.json({
        result: "data",
        message :"success",
        meta : null
    })
});



module.exports= app;
