const express = require('express');
const authRoute =express();

authRoute.post("/auth/register",(req, res)=>{
    // register logic

})
authRoute.get("/auth/:token/activate",(req, res)=>{
    
})
module.exports = authRoute;