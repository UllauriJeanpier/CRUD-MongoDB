const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema ({            // cada exquema es como definir una tabla en SQL
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('tasks',TaskSchema)        // guarda el esquema en la coleccion creada llamanda Tasks