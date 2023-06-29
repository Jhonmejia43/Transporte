import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    numero_bus: { type:Number, require:true },
    cantidad_asientos: { type: String, require:true  },
    empresa_asignada: { type: String, require:true },
    createAT : {default: Date.now },
    estado:{type:Boolean, default:false}

});

export default bus [{busSchema}]