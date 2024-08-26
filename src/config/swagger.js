const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Warehouse Inventory Optimization API',
      version: '1.0.0',
      description: 'API for optimizing warehouse inventory'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/docs/swagger-docs.js']
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = swaggerSpec
