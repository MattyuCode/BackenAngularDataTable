const productoModels = require("../models/productoModels");

exports.crearProductoContrll = async (request, respuesta) => {
    // console.log("Aqui estan tus listados", req.body);

    try {
        // Creando nuestros productos
        let products;
        products = new productoModels(request.body)
        await products.save();
        respuesta.send(products);


    } catch (e) {
        console.log(e);
        respuesta.status(500).send("Hubo un error ")
    }
}

exports.obtenerProductos = async (request, response) => {
    try {
        const productosObtener = await productoModels.find();
        response.json(productosObtener);

    } catch (e) {
        console.log(e);
        response.status(500).send("Hubo un error ")
    }
}

exports.actualizarProductoId = async (req, res) => {
    try {
        const {
            nombre,
            posicion,
            oficio,
            numero,
            fecha_inicio,
            salario
        } = req.body;
        let productoBuscandoId = await productoModels.findById(req.params.id);

        if (!productoBuscandoId) {
            res.status(404).json({
                message: "No existe el producto buscado"
            });
        }

        productoBuscandoId.nombre = nombre;
        productoBuscandoId.posicion = posicion;
        productoBuscandoId.oficio = oficio;
        productoBuscandoId.numero = numero;
        productoBuscandoId.fecha_inicio = fecha_inicio;
        productoBuscandoId.salario = salario;

        productoBuscandoId = await productoModels.findByIdAndUpdate({
            _id: req.params.id
            // del id que geenera postman _id
        }, productoBuscandoId, {
            new: true
        });
        res.json(productoBuscandoId);

    } catch (e) {
        console.log(e);
        res.status(500).send("Hubo un error ")
    }
}


exports.obtenerProd = async (req, res) => {
    try {
        let productoBuscandoId2 = await productoModels.findById(req.params.id);

        if (!productoBuscandoId2) {
            res.status(404).json({
                message: "No existe el producto buscado"
            });
        }

        res.json(productoBuscandoId2);

    } catch (e) {
        console.log(e);
        res.status(500).send("Hubo un error ")
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let eliminarProd = await productoModels.findById(req.params.id);

        if (!eliminarProd) {
            res.status(404).json({
                message: "No existe el producto buscado"
            });
        }
        await productoModels.findByIdAndRemove({
            _id: req.params.id
        })
        res.json({
            message: "Producto eliminado exitosamente"
        });

    } catch (e) {
        console.log(e);
        res.status(500).send("Hubo un error ")
    }
}