const express = require("express")
const mainRoute = express()

// route import
const authRouter =require("../modules/auth/auth.router")
const userRouter =require("../modules/user/user.router")
// mounting
mainRoute.use('/auth', authRouter)// auth.router.js ==> foutes
mainRoute.use('/user',userRouter)

mainRoute.use((request ,response , next)=>{
    //next()
    //next({})
    // this.response.status(404).json({
    //     result:"any",
    //     message:"resource not found",
    //     meta : null
    // })
    next({
        code:404, message:"Resource not found"
    })
})


module.exports = mainRoute;
