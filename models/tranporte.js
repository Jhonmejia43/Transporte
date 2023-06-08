import mongoose from "mongoose";

const vendedorSchema = new mongoose.Schema({
    cedula: { type: String, require:true },
    nombre: { type: String, minlenght: 5, require:true },
    cuenta: { type: String, require:true},
    clave: { type: String, require:true},
    telefono: {type: String, require:true},
    createAT : {default: Date.now }
});

const clientesSchema = new mongoose.Schema({
    cedula: { type: String, require:true },
    nombre: { type: String, minlenght: 5, require:true },
    createAT : {default: Date.now }
});

const busSchema = new mongoose.Schema({
    cantidad_asientos: { type: String, require:true },
    empresa_asignada: { type: String, require:true },
    conductor:{
        cedula:{type:String, require:true},
        nombre:{type:String, require:true},
        id_bus:{type:String, require:true},
        experiencia:{type:String, require:true},
        telefono:{type:String, require:true}  
    },
    createAT : {default: Date.now }

});

const rutasSchema = new mongoose.Schema({
    precio:{type: Number, require:true},
    origen:{type:String, require:true},
    destino:{type:String, require:true},
    horario:{
        hora_partida:{type:Date, require:true},
        hora_llegada:{type:Date, require:true},
        fecha_partida:{type:Date, require:true},
        fecha_llegada:{type:Date, require:true}
    },
    createAT : {default: Date.now }

});

const ticketSchema = new mongoose.Schema({
    vendedor_id:{type:String, require:true},
    cliente_id:{type:String, require:true},
    ruta_id:{type:String, require:true},
    bus_id:{type:String, require:true},
    fecha_venta:{type:Date, require:true},
    hora_venta:{type:Date, require:true},
    createAT : {default: Date.now }

})