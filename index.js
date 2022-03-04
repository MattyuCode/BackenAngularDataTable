//LINK DEL VIDEO
// https://youtu.be/aLbDBaFYoLY

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// creamos el servidor
const app = express();

// Conectamos con la base de datos del
 conectarDB();

//Usando el cors
app.use(cors())

 // Enviando JSON en la aplicacion
 app.use(express.json());

 // Rutas principal
 app.use('/api/productos', require('./routers/producto'));
 /*/api/productos=  esta se pasa en la url de postman y el nombre (productos es la tabla que se crean en mongo) */

// app.get('/', (req, res) => {
//     res.send(`<h1>Hola mundo</h1>`)
// })


app.listen(4500, () => {
    console.log('El servidor esta en ejecucion perfectamente');
})