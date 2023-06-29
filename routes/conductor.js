import { Router } from "express"
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import validarCampos from "..middlewares/validar.js"

const router = new Router()

router.get('/conductor', httpConductor.getConductor);

router.get('/ruta/:id',[
    check("id", "Digite el id").not().isEmpty(),
    validarCampos
],httpConductor.getConductorId);

router.post('/agregar',[
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("id_bus", "Digite el id del bus").not().isEmpty(),
    check("experiencia", "Digite sus años de experiencia").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
],httpConductor.postConductor);

router.put('/ruta/:id',[
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("id_bus", "Digite el id del bus").not().isEmpty(),
    check("experiencia", "Digite sus años de experiencia").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpConductor.putConductor);

router.delete('/ruta/:id', httpConductor.deleteConductor);
router.put('inactivarConductor/:id',httpConductor.putConductorInactivar)
router.put('activarConductor/:id',httpConductor.putConductorActivar)

export default router