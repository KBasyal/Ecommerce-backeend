const Joi = require("joi")

const ProductCreateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    summary:Joi.string().required(),
    description:Joi.string().allow(null, "").optional(),
    price:Joi.number().min(100).required(),
    discount:Joi.number().min(0).max(90).default(0),
    categories:Joi.array().items(Joi.string()).allow(null,"").optional(),
    brand:Joi.string().allow(null, "").optional,
    isFeatured:Joi.boolean().default(false),
    sellerId:Joi.string().allow(null , "").default(null),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    images : Joi.array().items(Joi.string().allow(null, "")).empty(null, "").optional().default(null),
    
    
})
const ProductUpdateDTO = Joi.object({
    title:Joi.string().min(2).required(),
    summary:Joi.string().required(),
    description:Joi.string().allow(null, "").optional(),
    price:Joi.number().min(100).required(),
    discount:Joi.number().min(0).max(90).default(0),
    categories:Joi.array().items(Joi.string()).allow(null,"").optional(),
    brand:Joi.string().allow(null, "").optional,
    isFeatured:Joi.boolean().default(false),
    sellerId:Joi.string().allow(null , "").default(null),
    status:Joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    images : Joi.array().items(Joi.string().allow(null, "")).empty(null, "").optional().default(null),
   
})
module.exports={
    ProductCreateDTO,
    ProductUpdateDTO
}