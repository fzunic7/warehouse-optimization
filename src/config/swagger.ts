import swaggerJsdoc, { Options } from 'swagger-jsdoc'

const options: Options = {
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
  apis: ['./src/docs/swagger-docs.ts']
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec
