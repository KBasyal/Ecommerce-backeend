const express = require("express")
const mainRoute = express()

// route import
const authRouter =require("../modules/auth/auth.router")
const userRouter =require("../modules/user/user.router")
const bannerRouter = require("../modules/banner/banner.router")
const brandRouter = require("../modules/brand/brand.router")
const categoryRouter = require("../modules/category/category.router")
const productRouter = require("../modules/product/product.router")
const cartRouter= require("../modules/cart/cart.router")


// mounting
mainRoute.use('/auth', authRouter)// auth.router.js ==> foutes
mainRoute.use('/user',userRouter)
mainRoute.use("/banner", bannerRouter)
mainRoute.use("/brand", brandRouter)
mainRoute.use("/category", categoryRouter)
mainRoute.use("/product", productRouter)
mainRoute.use("/order", cartRouter)


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
