import { validationResult } from "express-validator";
import Vendedor from "../models/vendedor.js";

const httpVendedor ={
    getVendedor:async(req,res)=>{
        res.json("Base de datos")
    }
}
export default httpVendedor