const mongoose = require('mongoose');
require('dotenv').config({
    path: 'variables.env'
});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("Base de Datos conectado");
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenmos la app cuando hay error
    }
}

module.exports = conectarDB;
