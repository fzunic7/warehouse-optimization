/* eslint-disable no-undef */
const WarehouseService = require('../src/services/warehouseService');

describe('WarehouseService', () => {
  let service;

  beforeEach(() => {
    service = new WarehouseService();
  });

  test('should correctly optimize warehouse items', () => {
    const items = [
      { name: "Coffee Table", size: 10, value: 150, priority: 2, dependencies: [] },
      { name: "Flat-screen TV", size: 15, value: 800, priority: 1, dependencies: [] },
      { name: "Antique Vase", size: 5, value: 3000, priority: 4, dependencies: [] },
      { name: "Bookshelf", size: 25, value: 200, priority: 2, dependencies: [] }
    ];
    const totalSpace = 25;

    const result = service.optimizeWarehouseItems(items, totalSpace);

    expect(result.totalValue).toBe(950);
    expect(result.selectedItems).toEqual([
      { name: "Coffee Table", size: 10, value: 150, priority: 2, dependencies: [] },
      { name: "Flat-screen TV", size: 15, value: 800, priority: 1, dependencies: [] }
    ]);
  });

  test('should handle empty items array', () => {
    const items = [];
    const totalSpace = 30;

    const result = service.optimizeWarehouseItems(items, totalSpace);

    expect(result.totalValue).toBe(0);
    expect(result.selectedItems).toEqual([]);
  });

  test('should handle case where no item fits in the space', () => {
    const items = [
      { name: "Large Item", size: 100, value: 1000, priority: 1, dependencies: [] }
    ];
    const totalSpace = 50;

    const result = service.optimizeWarehouseItems(items, totalSpace);

    expect(result.totalValue).toBe(0);
    expect(result.selectedItems).toEqual([]);
  });
});
