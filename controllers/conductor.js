import { validationResult } from "express-validator";
import Conductor from "../models/conductor.js";

const httpConductor ={
    getConductor:async(req,res)=>{
        res.json("Base de datos")
    }
}
export default httpConductor