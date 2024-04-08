const Joi =require("joi")

class AuthController{
    register=async(req,res,next) =>{
        // to do:validation
        
        // to do:db query to store
        // to do:verificaion send vai email
        // to do:clinet response
        const payload =req.body;
        
        // ruleset

        const response = await rule.validate(payload, {abortEarly:false});
        response.json({
            result:payload,
            message:"Register success",
            meta: null
        })
    }
    login=(req, res, next)=>{
        // to do : data validation
        // to do : db query execute
        // to do :otp create
        // to do jwt token generate
        // to do : clinet response

    }
}
const authCtrl = new AuthController()
module.exports =authCtrl;