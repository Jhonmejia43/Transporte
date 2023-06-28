import { Router } from "express"
import httpHorario from "../controllers/horario.js";
import { check } from "express-validator";

const router = new Router()

router.get('/horario',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty()
],httpHorario.grtHorario);

// router.get('/ruta/:codigo',funcionesruta.getrutaNombre);

// router.post('/agregar',funcionesruta.postAgregarruta);

// router.put('/ruta/:codigo', funcionesruta.putEditarruta);

// router.delete('/ruta/:codigo', funcionesruta.deleteruta);

export default router