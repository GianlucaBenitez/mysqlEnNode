const express = require('express');
const router = express.Router();
const promiseQuery = require('../config/db')

router.get('/', async (req, res) => {
    try {
      const query = "SELECT * FROM `usuarios`"
  
      const usuarios =  await promiseQuery(query)
      res.json(usuarios)
    } catch (err) {
      throw err
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "SELECT * FROM `usuarios` WHERE id = ?"
  
      const usuario =  await promiseQuery(query, [id])
      res.json(usuario)
    } catch (err) {
      throw err
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const { nombre, contrasena } = req.body
  
      const query = "INSERT INTO `usuarios` (nombre, contrasena) VALUES (?, ?)"
  
      const usuario =  await promiseQuery(query, [nombre, contrasena])
      res.json(usuario)
    } catch (err) {
      throw err
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, contrasena } = req.body
  
      const query = "UPDATE `usuarios` SET nombre = ?, contrasena = ? WHERE id = ?"
  
      const usuario =  await promiseQuery(query, [nombre, contrasena, id])
      res.json(usuario)
    } catch (err) {
      throw err
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
  
      const query = "DELETE FROM `usuarios` WHERE id = ?"
  
      const usuario =  await promiseQuery(query, [id])
      res.json(usuario)
  } catch (err) {
      throw err
    }
  });
  
  module.exports = router