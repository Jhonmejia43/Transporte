import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema({

    hora_partida: { type: Date, require: true },
    hora_llegada: { type: Date, require: true },
    fecha_partida: { type: Date, require: true },
    fecha_llegada: { type: Date, require: true },
    createAT: { type:Date,default: Date.n1ow },
    estado: { type: Boolean, default: false }
});

export default mongoose.model("Horario", horarioSchema)
