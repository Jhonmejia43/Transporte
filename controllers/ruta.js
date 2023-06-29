import { validationResult } from "express-validator";
import Ruta from "../models/ruta.js";

const httpRuta ={
    getRuta:async(req,res)=>{
        res.json("Base de datos")
    }
}
export default httpRuta