import  express  from "express";
import mongoose from 'mongoose';
import "dotenv/config"

const app = express()
app.use(express.json()) 

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.mongoDB)
    .then(() => console.log('Connected!'));
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})