const Joi = require('joi');

const schema = Joi.object({    
    name: Joi.string().min(5).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().min(10).required(),
    discount: Joi.number().min(0).max(100).required(),    
    category: Joi.string().required(),    
    imgUrl: Joi.string().required(),
})



module.exports = schema;