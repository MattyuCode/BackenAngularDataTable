 // Rutas productos
 const express = require('express');
 const router = express.Router();
 const importProdCon = require('../controllers/producotControllers');

 // APi de productos  api/productos
 router.post('/', importProdCon.crearProductoContrll);
 router.get('/', importProdCon.obtenerProductos);
 router.put('/:id', importProdCon.actualizarProductoId);
 router.get('/:id', importProdCon.obtenerProd);
 router.delete('/:id', importProdCon.eliminarProducto);

 //  router.post('/', () => {
 //      console.log("Creando productos");
 //  }) // esta es la primera y luego se pasa el otro que esat arriba

 module.exports = router;