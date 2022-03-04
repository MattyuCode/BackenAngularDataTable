 const mongoose = require('mongoose');
 const ProductoSchema = mongoose.Schema({

     nombre: {
         type: String,
         required: true
     },
     posicion: {
         type: String,
         required: true
     },
     oficio: {
         type: String,
         required: true
     },
     numero: {
         type: Number,
         required: true
     },
     fecha_inicio: {
         type:  Date,
         required: true
        //  required: Date.toString()
     },
     salario: {
         type: Number,
         required: true
     },
     fechaCreacion: {// Se agreagar esto a parte para ver cuando se creo
         type: Date,
         default: Date.now()
     }

 });

 module.exports = mongoose.model('Producto', ProductoSchema);