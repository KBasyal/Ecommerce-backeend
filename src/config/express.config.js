const express = require("express");
const app = express()


// routing
app.get("/about", (resquest, response)=>{
    //only for the get request
    response.json({
        result:"any data",
        message:"this is about page",
        meta:null
    })
})

// 404 route
// app.use("/:productSlug",(request , response)=>{
//     // response.send("hello world")
//     response.status(404).json({
//         result: "data",
//         message :"success",
//         meta : null
//     })
// });
app.use("/" , (request, response)=>{
    response.status(404).json({
        result :"any",
        message:"hello there",
        meta:null
    })
})



module.exports= app;
