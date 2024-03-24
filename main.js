// main.js

// Importamos los módulos necesarios
import ProductManager from './ProductManager.js';
import InventoryManager from './InventoryManager.js';
import OrderManager from './OrderManager.js';

// Creamos instancias de los módulos
const productManager = new ProductManager();
const inventoryManager = new InventoryManager(productManager);
const orderManager = new OrderManager(productManager, inventoryManager);

// Agregamos algunos productos
const product1 = { id: 1, name: 'Camiseta', price: 19.99 };
const product2 = { id: 2, name: 'Pantalón', price: 39.99 };
productManager.addProduct(product1);
productManager.addProduct(product2);

// Agregamos productos al inventario
inventoryManager.addProductToInventory(1, 10);
inventoryManager.addProductToInventory(2, 5);

// Realizamos un pedido
orderManager.placeOrder(1, 3);
orderManager.placeOrder(2, 2);

// Obtenemos los pedidos realizados
const orders = orderManager.getOrders();
console.log('Pedidos:', orders);

// Obtenemos la cantidad de inventario de un producto
const product1Inventory = inventoryManager.getInventoryQuantity(1);
console.log(`Cantidad en inventario de ${product1.name}: ${product1Inventory}`);