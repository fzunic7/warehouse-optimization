import { Request, Response } from 'express'
import WarehouseService from '../services/warehouseService'
import { optimizeSchema } from '../validation/warehouseValidation'

class WarehouseController {
  private warehouseService: WarehouseService

  constructor() {
    this.warehouseService = new WarehouseService()
  }

  public optimize(req: Request, res: Response): Response {
    const { error, value } = optimizeSchema.validate(req.body)

    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      })
    }

    const { items, total_space } = value

    return res.json(
      this.warehouseService.optimizeWarehouseItems(items, total_space)
    )
  }
}

export default WarehouseController
