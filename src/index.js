const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config/swagger')
const warehouseRoutes = require('./routes/warehouseRoutes')

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', warehouseRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})
