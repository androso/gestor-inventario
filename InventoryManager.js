export default class InventoryManager {
  constructor() {
    this.inventory = new Map();
  }

  addProductToInventory(product, quantity) {
    if (product) {
      this.inventory.set(product.id, { ...product, stock: quantity })
    }
  }

  getProductById(id) {
    return this.inventory.get(id);
  }

  updateProduct(id, updates) {
    const product = this.getProductById(id);

    if (product) {
      Object.assign(product, updates);
    }
  }

  removeProductUnit(productId, quantity) {
    const product = this.inventory.get(productId);
    const currentQuantity = product.stock ?? 0;

    if (currentQuantity >= quantity) {
      this.updateProduct(productId, { stock: currentQuantity - quantity })
    }
  }

}