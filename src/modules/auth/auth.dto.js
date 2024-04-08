const Joi = require('joi')


const registerDTO=Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(25).required(),
    confirmPassword:Joi.string().valid(Joi.preferences(password)).required(),
    role:Joi.string().pattern(/^(seller|Customer|admin)$/)
    //alphanumeric
    //[a-zA-Z0-9]
    //[\w\d()"'"]
})
module.exports=registerDTO