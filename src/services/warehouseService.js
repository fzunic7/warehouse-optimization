class WarehouseService {
  // Function to check if all dependency items of an current item are met
  isDependencyAdded(selectedItems, item) {
    const selectedNamesSet = new Set(
      selectedItems.map((selectedItem) => selectedItem.name)
    );

    for (let dependency of item.dependencies) {
      if (!selectedNamesSet.has(dependency)) {
        return false;
      }
    }

    return true;
  }

  // Function to optimize the selection of warehouse items
  optimizeWarehouseItems(items, totalSpace) {
    // Sort items by priority, then by value
    items.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return b.value - a.value;
    });

    // Initialize arrays for maximum value and best combination of items
    const itemsMaxValue = new Array(totalSpace + 1).fill(0);
    const selectedItems = new Array(totalSpace + 1).fill(null).map(() => []);

    // Initialize array to avoid storing duplicates
    const alreadyAdded = new Array(totalSpace + 1)
      .fill(null)
      .map(() => new Set());

    // Iterate from 1 to given totalSpace
    for (let spaceCapacity = 1; spaceCapacity <= totalSpace; spaceCapacity++) {
      let maxValue = itemsMaxValue[spaceCapacity];
      let bestCombo = [...selectedItems[spaceCapacity]];

      // Iterate the items
      items.forEach((item) => {
        if (item.size <= spaceCapacity) {
          const spaceLeft = spaceCapacity - item.size;

          // Check if dependencies are met and the item wasn't added before
          if (
            this.isDependencyAdded(selectedItems[spaceLeft], item) &&
            !alreadyAdded[spaceLeft].has(item.name)
          ) {
            const potentialValue = itemsMaxValue[spaceLeft] + item.value;

            // Update the best combination based on potential value
            if (potentialValue > maxValue) {
              maxValue = potentialValue;
              bestCombo = [...selectedItems[spaceLeft], item];
            }
          }
        }
      });

      // Step 8: Update the arrays with the best results for this capacity
      itemsMaxValue[spaceCapacity] = maxValue;
      selectedItems[spaceCapacity] = bestCombo;
      alreadyAdded[spaceCapacity] = new Set(bestCombo.map((i) => i.name));
    }

    // Step 9: Return max value and selected combination of items
    return {
      totalValue: itemsMaxValue[totalSpace],
      selectedItems: selectedItems[totalSpace],
    };
  }
}

module.exports = WarehouseService;
