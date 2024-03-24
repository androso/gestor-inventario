export default class OrderManager {
  constructor(inventoryManager) {
    this.inventoryManager = inventoryManager;
    this.orders = [];
  }

  placeOrder(productId, quantity) {
    const product = this.inventoryManager.getProductById(productId);
    const availableQuantity = product.stock;

    if (product && availableQuantity >= quantity) {
      this.inventoryManager.removeProductUnit(productId, quantity);
      this.orders.push({ product, orderQuantity: quantity });
    }
  }

  getOrders() {
    return this.orders;
  }
}