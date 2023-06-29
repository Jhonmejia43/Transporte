import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    cedula: { type: String, require:true },
    nombre: { type: String, minlenght: 5, require:true },
    telefono: { type: String, require: true},
    createAT : {default: Date.now },
    estado:{type:Boolean, default:false}
});

// export default cliente [{clienteSchema}]

export default mongoose.model("Cliente", clienteSchema)
