const Joi = require("joi")

const CategoryCreateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image : Joi.string().empty(null, "").optional().default(null),
    parentId : Joi.string().allow(null, "").default(null)
    
})
const CategoryUpdateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image : Joi.string().empty(null, "").optional().default(null),
    parentId : Joi.string().allow(null, "").default(null)
    // image: Joi.object().empty(null ,  "").optional()
   
})
module.exports={
    CategoryCreateDTO,
    CategoryUpdateDTO
}