import mongoose from "mongoose";

const rutaSchema = new mongoose.Schema({
    precio:{type: Number, require:true},
    origen:{type:String, require:true},
    destino:{type:String, require:true},
    createAT : {type:Date,default: Date.now },
    estado:{type:Boolean, default:false}

});

export default mongoose.model("Ruta", rutaSchema)
