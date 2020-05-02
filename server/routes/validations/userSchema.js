const Joi = require('@hapi/joi') 

const schemas = { 
  signUp: Joi.object().keys({ 
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }),

  login: Joi.object().keys({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }),
}; 

module.exports = schemas;