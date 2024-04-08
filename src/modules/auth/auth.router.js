// const express = require('express');
// const authRoute =express.Router();
const authRoute = require('express').Router();
// express ===> mount ==> middle ware
const authCtrl = require("./auth.controller")
const {bodyValidator}=require("../../../middleware/validator.middleware")
const {registerDTO}= require("./auth.dto")

// request manipulation 
//next middle ware call
 // client response
// authRoute.post("/register",(req, res, next)=>{
//     // register logic
//     // res.json({
//     //     result :"success",
//     //     message:"request success",
//     //     meta :null
//     // })
//     // data receive 
//     // validation
//         //db dtore 
//         // response register
//     const data ={
//         name:"kamal",
//         email:"kamalbasyal987@gmail.com",
//         password:"admin123",
//         role:"admin"
//     };
//     if (!data){
//         next({code:422, data:{name:"name is requireed", email:"email is required", password:"password is required",role :"role is required"}})
//     }else{
//         //validation
//        console.log("i am here")
//         if (!data.name){
//             // res.status(422).json({
//             //     result:{
//             //         name:"name is required"
//             //     },
//             //     message:"validation failed",
//             //     meta :null
//             // })
//             next({code:422, data:{name:"name is requireed"}})
//         }
//         if (!data.email){
//             // res.status(422).json({
//             //     result:{
//             //         name:"email is required"
//             //     },
//             //     message:"validation failed",
//             //     meta :null
//             // })
//             next({code:422, data:{email:"email is requireed"}})

//         }
//         if (!data.password){
//             console.log(data)
//             next({code:422, data:{password:"password is requireed"}})
//             // res.status(422).json({
//             //     result:{
//             //         name:"password is required"
//             //     },
//             //     message:"validation failed",
//             //     meta :null
//             // })
//         }
//         if (!data.role){
//             // res.status(422).json({
//             //     result:{
//             //         name:"role is required"
//             //     },
//             //     message:"validation failed",
//             //     meta :null
//             // })
//             next({code:422, data:{role:"role is requireed"}})

//         }
//         //db store 
//         //query
//         const registeredUser={
//             _id:"123abc",
//             name:"kamal",
//             email:"kamalbasyal9987@gmail.com",
//             password:"admin123",
//             role:"admin"
//         }
//         if (registeredUser){
//             res.json({
//                 result:registeredUser,
//                 message:"success",
//                 meta: null
//             })
//             //success
//         }else{
//             // res.status(400).json({
//             //     result: null,
//             //     message:"user cannot register",
//             //     meta:null
//             // })
//             next({code:400, message:"sorry! cannot register"})
//         }

//     }
        
// })
// authRoute.get("/:token/activate",(req, res)=>{
//     // registet logic
//     // email user action token
//     res.json({
//         result:"test token",
//         message: "test",
//         meta :null
//     })
    
// })
// const loginCheck=(req, res, next)=>{
// //any mount
// // login check
// // log in in ==> next action
// // false ==> return client res staging login
//  let success =true;
//  let userDetail={
//     //db
//     _id :123,
//     name:"kamal",
//     role:"admin"
//  }
//  if(success){
//     req.authUser =userDetail
//     next()
//  }else{
//     res.status(401).json({
//         result:null,
//         message:"please login first",
//         meta: null
//     })

//  }
// }
// const permissionCheck =(req, res, next)=>{
//     // after login
//     const authUser =req.authUser || null;
//     if (!authUser){
//         res.status(401).json({
//             result: null,
//             message:"please login first",
//             meta:null
//         })

//     }else{
//         if(authUser.role ==='admin'){
//             next()
//         }else{
//             res.status(403).json({
//                 result: null,
//                 message:"you donot have permission to access",
//                 meta: null
//             })
//         }
//     }

// }
// // testing router
// const adminAccessAction =(req, res, next)=>{
//     res.json({
//         result: null,
//         message:"you got accesses", 
//         meta:null
//     })

// }
// authRoute.get("/admin",loginCheck, permissionCheck, adminAccessAction)// admin access
// authRoute.get("/:userId", loginCheck,permissionCheck,(req, res , next)=>{

// })
// authRoute.get("/me", loginCheck, (req, res, next)=>{
//     res.json({
//       result: req.authUser,
//       message :"profile fetched",
//       meta: null  
//     })
// })
authRoute.post('/register', authCtrl.register)
authRoute.post('/login', authCtrl.login)
module.exports = authRoute;