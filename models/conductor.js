import mongoose from "mongoose";

const conductorSchema = new mongoose.Schema({
    cedula: { type: String, require: true },
    nombre: { type: String, require: true },
    id_bus: { type: mongoose.Schema.Types.ObjectId, ref: 'busSchema', require: true },
    experiencia: { type: String, require: true },
    telefono: { type: String, require: true },
    createAT: { type:Date,default: Date.now },
    estado: { type: Boolean, default: false }

});

export default mongoose.model("Conductor", conductorSchema)
