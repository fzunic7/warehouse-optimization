import { Router } from 'express'
import WarehouseController from '../controllers/warehouseController'

const router = Router()
const warehouseController = new WarehouseController()

router.post('/optimize', warehouseController.optimize.bind(warehouseController))

export default router
