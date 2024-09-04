import httpMocks from 'node-mocks-http'
import WarehouseController from '../src/controllers/warehouseController'
import WarehouseService from '../src/services/warehouseService'

jest.mock('../src/services/warehouseService')

describe('WarehouseController', () => {
  let controller: WarehouseController

  beforeEach(() => {
    controller = new WarehouseController()
  })

  test('should return optimized result with valid input', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/api/optimize',
      body: {
        total_space: 30,
        items: [
          {
            name: 'Coffee Table',
            size: 10,
            value: 150,
            priority: 2,
            dependencies: []
          },
          {
            name: 'Flat-screen TV',
            size: 15,
            value: 800,
            priority: 1,
            dependencies: []
          }
        ]
      }
    })

    const res = httpMocks.createResponse()

    ;(
      WarehouseService.prototype.optimizeWarehouseItems as jest.Mock
    ).mockReturnValue({
      totalValue: 950,
      selectedItems: [
        {
          name: 'Coffee Table',
          size: 10,
          value: 150,
          priority: 2,
          dependencies: []
        },
        {
          name: 'Flat-screen TV',
          size: 15,
          value: 800,
          priority: 1,
          dependencies: []
        }
      ]
    })

    await controller.optimize(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({
      selectedItems: [
        {
          name: 'Coffee Table',
          size: 10,
          value: 150,
          priority: 2,
          dependencies: []
        },
        {
          name: 'Flat-screen TV',
          size: 15,
          value: 800,
          priority: 1,
          dependencies: []
        }
      ],
      totalValue: 950
    })
  })

  test('should return 400 if validation fails', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/api/optimize',
      body: { total_space: -1, items: [] }
    })

    const res = httpMocks.createResponse()

    await controller.optimize(req, res)

    expect(res.statusCode).toBe(400)
    expect(res._getJSONData()).toHaveProperty('error')
  })
})
