//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');

// api/productos
router.post('/',          productoController.crearProducto);
router.get('/',           productoController.obtenerProductos);
router.get('/filtrar-producto', productoController.obtenerProductos);
router.put('/:_id',       productoController.actualizarProductos);
router.get('/:_id' ,      productoController.obtenerProducto);
//router.get('/:proveedor', productoController.obtenerProducto2);
router.delete('/:_id',    productoController.eliminarProductos);


module.exports = router;
 