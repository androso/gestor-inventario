export default class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getProductById(id) {
      return this.products.find(product => product.id === id);
    }
  
    updateProduct(id, updates) {
      const product = this.getProductById(id);
      if (product) {
        Object.assign(product, updates);
      }
    }
  
    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }