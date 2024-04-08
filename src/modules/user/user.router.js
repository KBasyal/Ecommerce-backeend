// const express = require('express')
// const userRoutes = express.Router();
const userRoutes = require('express').Router()
const authCtrl = require("../auth/auth.controller")
userRoutes.route('/')
    .post((req,res, next)=>{

    })
    .get((req,res, next)=>{
        
    })

userRoutes.route('/:id')
    .get((req,res, next)=>{
        
    })
    .patch((req,res, next)=>{
        
    })
    .delete((req,res, next)=>{
        
    })
// userRoutes.post('/',(req , res)=>{
//     //user logic
// })
// userRoutes.get('/',(req,res, next)=>{

// })

userRoutes.get('/:id',(req,res, next)=>{
    
})
userRoutes.patch('/:id',(req,res, next)=>{
    
})
userRoutes.delete('/:id',(req,res, next)=>{
    
})
module.exports =userRoutes;