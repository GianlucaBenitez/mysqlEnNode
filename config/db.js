const mysql = require(`mysql`)
const { promisify } = require(`util`) 

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'datos',
  connectionLimit: 10, 
})

const promiseQuery = promisify(db.query).bind(db) 

db.getConnection((err, connection) => {
  if (err) {
    throw err
  } else {
    console.log('Conexión exitosa')
    
    connection.query(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL,
        contrasena VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
      )`
    )
  }
})

module.exports = promiseQuery