const Joi = require("joi")

const BrandCreateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image : Joi.string().empty(null, "").optional().default(null),
    homeSection: Joi.boolean().default(false)
    // image: Joi.string()
})
const BrandUpdateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image : Joi.string().empty(null, "").optional().default(null),
    // image: Joi.object().empty(null ,  "").optional()
    homeSection: Joi.boolean().default(false)

})
module.exports={
    BrandCreateDTO,
    BrandUpdateDTO
}