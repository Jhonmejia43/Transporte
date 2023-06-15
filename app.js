import  express  from "express";
import mongoose from 'mongoose';
import "dotenv/config"
import bus from "./routes/bus.js"
import cliente from "./routes/cliente.js"
import ruta from "./routes/ruta.js"
import ticket from "./routes/ticket.js"
import vendedor from "./routes/vendedor.js"

const app = express()
app.use(express.json()) 

app.use("/api/bus", bus)
app.use("/api/bus", cliente)
app.use("/api/bus", ruta)
app.use("/api/bus", ticket)
app.use("/api/bus", vendedor)

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.mongoDB)
    .then(() => console.log('Connected!'));
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})