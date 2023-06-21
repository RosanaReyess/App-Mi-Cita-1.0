const mongoose = require('mongoose')

const CitaSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    numeroTelefono:{
        type: String,
        require: true
    },
    fechaCita:{
        type: Date,
        require: true
    },
    identificacion:{
        type: String,
        require: true
    }

})

module.exports = mongoose.model('Cita', CitaSchema)