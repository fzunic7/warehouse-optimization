import express, { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'
import warehouseRoutes from './routes/warehouseRoutes'

const app: Express = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', warehouseRoutes)

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})
