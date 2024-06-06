const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definimos las rutas
const usuariosRouter = require('./routes/usuarios');
app.use('/usuarios', usuariosRouter);

// Conectamos a la DB
const conn = require('./config/db');

app.get('/', (req, res) => {
  res.send('Menú Principal');
});

app.listen(3000, () => {
console.log('La aplicación está funcionando');
})