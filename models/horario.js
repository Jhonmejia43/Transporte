import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema({

    hora_partida: { type: Date, require: true },
    hora_llegada: { type: Date, require: true },
    fecha_partida: { type: Date, require: true },
    fecha_llegada: { type: Date, require: true },
    createAT: { default: Date.now },
    estado: { type: Boolean, default: false }
});

export default ruta[{ horarioSchema }]