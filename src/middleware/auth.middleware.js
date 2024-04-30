require("dotenv").config()
const jwt = require("jsonwebtoken");
const authRoute = require("../modules/auth/auth.router");
const authSvc = require("../modules/auth/auth.service");
const auth =async (req, res, next) => {
    try{
        //bearer
        let token = req.headers["authorization"] ||null;
        if(!token){
            next({code: 401, message:"Token/Access Code required"})
        }
        // beraber token ===> ["bearer", "token"].pop()
        token = token.split(" ").pop()
        // token varify 
        //signature, expiry, formatting
        const tokenData = jwt.verify(token, process.env.JWT_SECRET)
        console.log(tokenData)
        const userDetail = await authSvc.findOneUser({
            _id: tokenData.sub
        })
        console.log(userDetail)
        if(!userDetail){
            next({code:401, message:" User dosenot exists anymore"})
        }
        req.authUser = userDetail;
        next()// allow the acess
    }catch(exception){
        console.log("exception", exception);
        next({code :401, message:"Unauthorized access"})
    }
}
module.exports = auth;