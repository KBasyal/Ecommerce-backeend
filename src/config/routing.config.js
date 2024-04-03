const express = require("express")
const mainRoute = express()

// route import
const authRouter =require("../modules/auth/auth.router")
const userRouter =require("../modules/user/user.router")
// mounting
mainRoute.use(authRouter)// auth.router.js ==> foutes
mainRoute.use(userRouter)

module.exports = mainRoute;
