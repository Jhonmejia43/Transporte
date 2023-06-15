import { Router } from "express"
import httpConductor from "../controllers/ruta.js";
import { check } from "express-validator";

const router = new Router()

router.get('/conductor', [
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("id_bus", "Digite el id del bus").not().isEmpty(),
    check("experiencia", "Digite sus años de experiencia").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty()
], httpConductor.getruta);

// router.get('/ruta/:codigo',funcionesruta.getrutaNombre);

// router.post('/agregar',funcionesruta.postAgregarruta);

// router.put('/ruta/:codigo', funcionesruta.putEditarruta);

// router.delete('/ruta/:codigo', funcionesruta.deleteruta);

export default router