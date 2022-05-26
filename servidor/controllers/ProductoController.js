const Producto = require("../models/Producto");

exports.crearProducto = async(req, res) => {
    
    try {
        let producto;

        //post 
        //creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error ╰(◣﹏◢)╯');
    }


}

exports.obtenerProductos = async (req, res) => {

    try {
        
        //GET
        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error ╰(◣﹏◢)╯');
    }
}

exports.actualizarProductos = async (req, res) => {

    try {
        //PUT
        const { nombre, peso, proveedor, unidades, placa_vehiculo, observaciones} = req.body;
        let producto = await Producto.findById({_id: req.params["_id"]});

        if(!producto)  return  res.status(404).json({msg: 'No Existe el producto'})
        
    producto.nombre=          nombre;
    producto.peso =           peso;
    producto.proveedor =      proveedor;
    producto.unidades =       unidades;
    producto.placa_vehiculo = placa_vehiculo;
    producto.observaciones =  observaciones;

    producto = await Producto.findOneAndUpdate({ _id: req.params["_id"] }, producto, { new: true } );
    res.json({msg: 'Datos actualizados'});

    } catch (error) {
        console.log(error);
        
    }

    exports.obtenerProductos = async (req, res) => {

        try {
            //GET especifico
            let producto = await producto.findById({_id: req.params["_id"]});
    
            if(!producto)  return  res.status(404).json({msg: 'No Existe el producto :C' })

       
        res.json(producto);
    
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:'hubo un error'});
            
        }


    }
}


    exports.eliminarProductos = async (req, res) => {

        try {
            //DELETE
            let producto = await Producto.findById({_id: req.params["_id"]});
    
             if(!producto)  return  res.status(404).json({msg: 'No Existe el producto :C' })

             await Producto.findOneAndDelete({_id: req.params["_id"]})
             res.status(400).json ({msg: 'Producto eliminado con exito' });
    
        } catch (e) {
            res.status(500).json({msg:'hubo un error'});            
        }

}