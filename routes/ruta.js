import { Router } from "express"
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";

const router=new Router()

router.get('/ruta',[
    check("precio","Digite su cedula").not().isEmpty(),
    check("origen","Digite su cedula").not().isEmpty(),
    check("destino","Digite su cedula").not().isEmpty()
],funcionesruta.getruta);

// router.get('/ruta/:codigo',funcionesruta.getrutaNombre);

// router.post('/agregar',funcionesruta.postAgregarruta);

// router.put('/ruta/:codigo', funcionesruta.putEditarruta);

// router.delete('/ruta/:codigo', funcionesruta.deleteruta);

export default router