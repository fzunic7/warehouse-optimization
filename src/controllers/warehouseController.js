const WarehouseService = require('../services/warehouseService')
const { optimizeSchema } = require('../validation/warehouseValidation')

class WarehouseController {
  constructor() {
    this.warehouseService = new WarehouseService();
  }

  optimize(req, res) {
    const { error, value } = optimizeSchema.validate(req.body)

    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      })
    }

    const { items, total_space } = value

    res.json(this.warehouseService.optimizeWarehouseItems(items, total_space))
  }
}

module.exports = WarehouseController;
