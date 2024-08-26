const sortItems = require('../utils/sortItems')

class WarehouseService {
  /**
   * Checks if all dependencies of a given item have been added to the selected items.
   * @param {Array} selectedItems - The array of items that have already been selected.
   * @param {Object} item - The item whose dependencies need to be checked.
   * @returns {boolean} - Returns true if all dependencies of the item are in the selected items, otherwise false.
   */
  isDependencyAdded(selectedItems, item) {
    const selectedNamesSet = new Set(
      selectedItems.map((selectedItem) => selectedItem.name)
    )

    for (let dependency of item.dependencies) {
      if (!selectedNamesSet.has(dependency)) {
        return false
      }
    }

    return true
  }

  /**
   * Optimizes the selection of warehouse items to maximize total value while respecting space constraints, priorities, and dependencies.
   * @param {Array} items - The list of items available for selection.
   * @param {number} totalSpace - The total available space in the warehouse.
   * @returns {Object} - An object containing the maximum total value and the best combination of selected items.
   */
  optimizeWarehouseItems(items, totalSpace) {
    const sortedItems = sortItems(items)

    // Initialize arrays for maximum value and best combination of items
    const itemsMaxValue = new Array(totalSpace + 1).fill(0)
    const selectedItems = new Array(totalSpace + 1).fill(null).map(() => [])

    // Initialize array to avoid storing duplicates
    const alreadyAdded = new Array(totalSpace + 1)
      .fill(null)
      .map(() => new Set())

    // Iterate from 1 to given totalSpace
    for (let spaceCapacity = 1; spaceCapacity <= totalSpace; spaceCapacity++) {
      let maxValue = itemsMaxValue[spaceCapacity]
      let bestCombo = [...selectedItems[spaceCapacity]]

      // Filter the sorted items to include only those that fit within the remaining space capacity
      const filteredItems = sortedItems.filter(
        (sortedItem) => sortedItem.size <= spaceCapacity
      )

      // Iterate filtered items
      filteredItems.forEach((filteredItem) => {
        const spaceLeft = spaceCapacity - filteredItem.size
        const areDependenciesMet = this.isDependencyAdded(
          selectedItems[spaceLeft],
          filteredItem
        )
        const isItemAdded = alreadyAdded[spaceLeft].has(filteredItem.name)

        if (areDependenciesMet && !isItemAdded) {
          const potentialValue = itemsMaxValue[spaceLeft] + filteredItem.value

          // Update the best combination based on potential value
          if (potentialValue > maxValue) {
            maxValue = potentialValue
            bestCombo = [...selectedItems[spaceLeft], filteredItem]
          }
        }
      })

      // Step 8: Update the arrays with the best results for this capacity
      itemsMaxValue[spaceCapacity] = maxValue
      selectedItems[spaceCapacity] = bestCombo
      alreadyAdded[spaceCapacity] = new Set(bestCombo.map((i) => i.name))
    }

    // Step 9: Return max value and selected combination of items
    return {
      totalValue: itemsMaxValue[totalSpace],
      selectedItems: selectedItems[totalSpace]
    }
  }
}

module.exports = WarehouseService
