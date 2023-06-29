import { Router } from "express"
import httpHorario from "../controllers/horario.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"

const router = new Router()

router.get('/horario',httpHorario.getHorario);

router.get('/ruta/:id',[
    check("id", "Digite el id").not().isEmpty(),
    validarCampos
],httpHorario.getHorarioId);

router.post('/agregar',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty(),
    validarCampos
],httpHorario.postHorario);

router.put('/ruta/:id',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty(),
    validarCampos
], httpHorario.putHorario);

router.delete('/ruta/:id', httpHorario.deleteHorario);

router.put('inactivarHorario/:id',httpHorario.putHorarioInactivar)
router.put('activarHorario/:id',httpHorario.putHorarioActivar)

export default router