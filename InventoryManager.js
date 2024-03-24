export default class InventoryManager {
  constructor(productManager) {
    this.productManager = productManager;
    this.inventory = new Map();
  }

  addProductToInventory(productId, quantity) {
    const product = this.productManager.getProductById(productId);
    if (product) {
      this.inventory.set(productId, (this.inventory.get(productId) || 0) + quantity);
    }
  }

  removeProductFromInventory(productId, quantity) {
    const currentQuantity = this.inventory.get(productId) || 0;
    if (currentQuantity >= quantity) {
      this.inventory.set(productId, currentQuantity - quantity);
    }
  }

  getInventoryQuantity(productId) {
    return this.inventory.get(productId) || 0;
  }
}