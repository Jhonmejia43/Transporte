import mongoose from "mongoose";


const ticketSchema = new mongoose.Schema({
    vendedor_id: {type:mongoose.Schema.Types.ObjectId,ref:'vendedorSchema', require:true},
    cliente_id:{type:mongoose.Schema.Types.ObjectId,ref:'clienteSchema', require:true},
    ruta_id:{type:mongoose.Schema.Types.ObjectId,ref:'rutaSchema', require:true},
    bus_id:{type:mongoose.Schema.Types.ObjectId,ref:'busSchema', require:true},
    fecha_venta:{type:Date, require:true},
    hora_venta:{type:Date, require:true},
    createAT : {type:Date,default: Date.now },
    estado:{type:Boolean, default:false}
})

export default mongoose.model("Ticket", ticketSchema)
