const Joi = require('@hapi/joi')

const schemas = {
  newPost: Joi.object().keys({
    receiver: Joi.string().required(),
    message: Joi.string(),
  }),

  requestPost: Joi.object().keys({
    inbox: Joi.string().valid('inbox').required()
  })
};

module.exports = schemas;