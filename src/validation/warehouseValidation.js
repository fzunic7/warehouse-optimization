const Joi = require('joi')

const itemSchema = Joi.object({
  name: Joi.string().required(),
  size: Joi.number().integer().positive().required(),
  value: Joi.number().integer().positive().required(),
  priority: Joi.number().integer().positive().required(),
  dependencies: Joi.array().items(Joi.string()).required()
})

const optimizeSchema = Joi.object({
  total_space: Joi.number().integer().positive().required(),
  items: Joi.array().items(itemSchema).required()
})

module.exports = { optimizeSchema }
