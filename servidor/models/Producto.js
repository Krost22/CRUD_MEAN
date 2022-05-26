const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        required: true
    },

    peso: {
        type: 'number',
        required: true
    },

    proveedor: {
        type: 'string',
        required: true
    },

    unidades: {
        type: 'number',
        required: true
    },

    placa_vehiculo: {
        type: 'string',
        required: true
    },

    observaciones: {
        type: 'string',
        required: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('producto', ProductoSchema);