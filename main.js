// Importamos los módulos necesarios
import InventoryManager from './InventoryManager.js';
import OrderManager from './OrderManager.js';

// Creamos instancias de los módulos
const inventoryManager = new InventoryManager();
const orderManager = new OrderManager(inventoryManager);

// Agregamos algunos productos
const product1 = { id: 1, name: 'Camiseta', price: 19.99 };
const product2 = { id: 2, name: 'Pantalón', price: 39.99 };

// Agregamos productos al inventario
inventoryManager.addProductToInventory(product1, 10);
inventoryManager.addProductToInventory(product2, 5);

// Realizamos un pedido
orderManager.placeOrder(1, 3);
orderManager.placeOrder(2, 2);

// Obtenemos los pedidos realizados
const orders = orderManager.getOrders();
console.log('Pedidos:', orders);

// Obtenemos la cantidad de inventario de un producto
const product1Inventory = inventoryManager.getProductById(1);
const product2Inventory = inventoryManager.getProductById(2);

console.log(`Cantidad en inventario de ${product1Inventory.name}: ${product1Inventory.stock}`);
console.log(`Cantidad en inventario de ${product2Inventory.name}: ${product2Inventory.stock}`);
