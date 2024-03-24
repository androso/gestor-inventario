export default class OrderManager {
  constructor(productManager, inventoryManager) {
    this.productManager = productManager;
    this.inventoryManager = inventoryManager;
    this.orders = [];
  }

  placeOrder(productId, quantity) {
    const product = this.productManager.getProductById(productId);
    const availableQuantity = this.inventoryManager.getInventoryQuantity(productId);

    if (product && availableQuantity >= quantity) {
      this.inventoryManager.removeProductFromInventory(productId, quantity);
      this.orders.push({ product, quantity });
    }
  }

  getOrders() {
    return this.orders;
  }
}