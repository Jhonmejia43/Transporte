import { validationResult } from "express-validator";
import Horario from "../models/horario.js";

const httpHorario ={
    grtHorario:async(req,res)=>{
        res.json("Base de datos")
    }
}
export default httpHorario