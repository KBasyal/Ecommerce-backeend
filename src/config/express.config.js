const express = require("express");
const app = express()
const mainRouter =require("./routing.config")
app.use(mainRouter)

app.use("/" , (request, response)=>{
    response.status(404).json({
        result :"any",
        message:"Resource not found",
        meta:null
    })
});



module.exports= app;
