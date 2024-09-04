import Joi, { ObjectSchema } from 'joi'

const itemSchema: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  size: Joi.number().integer().positive().required(),
  value: Joi.number().integer().positive().required(),
  priority: Joi.number().integer().positive().required(),
  dependencies: Joi.array().items(Joi.string()).required()
})

const optimizeSchema: ObjectSchema = Joi.object({
  total_space: Joi.number().integer().positive().required(),
  items: Joi.array().items(itemSchema).required()
})

export { optimizeSchema }
