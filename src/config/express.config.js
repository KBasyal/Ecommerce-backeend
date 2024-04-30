const express = require("express");
require("./db.config")
const helmet = require('helmet')
const cors =require('cors')
const app = express()
const mainRouter =require("./routing.config")
const router =express.Router()
const mongoose = require("mongoose")

const Joi =require("joi")
//throttle
//sanitization
app.use(helmet())// its a middle ware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

//static middleware
app.use('/assets/image', express.static('/public/'))

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
    // console.log(error instanceof mongoose.MongooseError)

    let statusCode =error.code || 500;
    let data = error.data || null;
    let msg =error.message || "Internal Server Error";
    if (error instanceof Joi.ValidationError){
        // format error 
        statusCode = 422;
        msg ="Validation Failed"
        data = {};
        const errorDetail =error.details
        if(Array.isArray(errorDetail)){
            errorDetail.map((errorObj)=>{
                data[errorObj.context.label]=errorObj.message
            })
        }
    }
    // error message // uniqueness failed
    if(statusCode === 11000){
        statusCode =400;
        data={};
        const fields =Object.keys(error.keyPattern) //array
        fields.map((fieldname)=>{
            data[fieldname]= fieldname +" should be unique"
        })
        msg="Validation failed"
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
