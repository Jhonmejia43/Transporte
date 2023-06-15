import { Router } from "express"
import httpCliente from "../controllers/cliente.js";
import {check} from "express-validator"

const router=new Router()

router.get('/cliente',[
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").isLength({min:5}),
    check("nombre", "Digite su nombre").isEmpty()
],httpCliente.getcliente);

// router.get('/cliente/:cedula',funcionescliente.getclienteNombre);

// router.post('/agregar',funcionescliente.postAgregarcliente);

// router.put('/cliente/:cedula', funcionescliente.putEditarcliente);

// router.delete('/cliente/:cedula', funcionescliente.deletecliente);

export default router
