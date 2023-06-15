import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";

const router=new Router()

router.get('/vendedor',[
    check("cedula","Digite su cedula").not().isEmpty(),
    check("nombre","Digite su nombre").not().isEmpty(),
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
    check("telefono","Digite su telefono").not().isEmpty(),
],httpVendedor.getVendedor);

// router.get('/vendedor/:cedula',funcionesvendedor.getVendedorNombre);

// router.post('/agregar',funcionesvendedor.postAgregarVendedor);

// router.put('/vendedor/:cedula', funcionesvendedor.putEditarVendedor);

// router.delete('/vendedor/:cedula', funcionesvendedor.deletevendedor);

export default router
