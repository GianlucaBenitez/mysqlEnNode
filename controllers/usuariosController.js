const promiseQuery = require('../config/db')

// Controlador de usuarios

const obtenerTodos = async (req, res) => {
  try {
    const query = "SELECT * FROM usuarios";

    const usuarios =  await promiseQuery(query)
    res.json(usuarios)
  } catch (error) {
    throw err
  }
}

const obtener = async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM usuarios WHERE id = ?"

    const usuario = await promiseQuery(query, [id])
    res.json(usuario) 
  } catch (error) {
    throw err
  }
}

const crear = async (req, res) => {
  try {
    const { nombre, contrasena } = req.body
    const query = "INSERT INTO usuarios (nombre, contrasena) VALUES (?, ?)"

    await promiseQuery(query, [nombre, contrasena])
    res.json({message: "usuario creado!!!"})
  } catch (error) {
    throw error
  }
}

const actualizar = async (req, res) => {
  try {
    const {nombre, contrasena} = req.body
    const query = "UPDATE usuarios SET nombre = ?, contrasena = ? WHERE id = ?"

    await promiseQuery(query, [nombre, contrasena, req.params.id])
    res.json({message: "usuario actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const query = "DELETE FROM usuarios WHERE id = ?"

    await promiseQuery(query, [req.params.id])
    res.json({message: "usuario borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerTodos,
  obtener,
  crear,
  actualizar,
  borrar
}