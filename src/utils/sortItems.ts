import { Item } from '../types/item'

/**
 * Sorts the items based on priority and value.
 * @param {Array} items - Array of item objects.
 * @returns {Array} - A new sorted array of items.
 */
function sortItems(items: Item[]): Item[] {
  // Create a copy of the items array to avoid mutating the original array
  const sortedItems = [...items]

  // Sort by priority (ascending) and then by value (descending)
  sortedItems.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority // Lower priority number means higher priority
    }
    return b.value - a.value // Higher value is prioritized if priority is the same
  })

  return sortedItems
}

export default sortItems
