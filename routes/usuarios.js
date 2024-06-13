const express = require('express');
const router = express.Router();

// Importamos controlador
const usuariosController = require('../controllers/usuariosController')

router.get('/', usuariosController.obtenerTodos);
router.get("/:id", usuariosController.obtener);
router.post('/', usuariosController.crear);
router.put('/:id', usuariosController.actualizar);
router.delete('/:id', usuariosController.borrar);
  
module.exports = router