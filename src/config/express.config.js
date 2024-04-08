const express = require("express");
const helmet = require('helmet')
const app = express()
const mainRouter =require("./routing.config")
const router =express.Router()

const Joi =require("joi")
//throttle
//sanitization
app.use(helmet())// its a middle ware
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

router.get('/health',(req, res, next)=>{
    // res.end("hello")
    res.json({
        result:"hello there",
        message:"success ok",
        meta:null
    })
})

app.use(router)
// routing mount
app.use(mainRouter)
app.use((request, response, next)=>{
    // next()
    next({code: 404, message :"Resource not found" })
});
// error handling middleware
app.use((error, req, res, next)=>{
    let statusCode =error.code || 500;
    let data = error.data || null;
    let msg =error.message || "Internal Server Error";
    if (error instanceof Joi.ValidationError){
        // format error 
        statusCode =422;
        msg ="Validation Failed"
        data = {};
        const erroDetail =error.details
        if(Array.isArray(errorDetail)){
            errorDetail.map((errorObj)=>{
                data[errorObj.context.label]=errorObj.message
            })

        }
    }
    res.status(statusCode).json({
        result: data,
        //     name:"name is requireed",
        //     email:"email is required",
        //     password:"password is required",
        //     role :"role is required"
        // },
        message:msg,
        meta:null
    })
    //next(arg)

})





module.exports= app;
