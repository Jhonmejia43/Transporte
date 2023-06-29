import { Router } from "express"
import httpHorario from "../controllers/horario.js";
import { check } from "express-validator";

const router = new Router()

router.get('/horario',httpHorario.getHorario);

router.get('/ruta/:id',[
    check("id", "Digite el id").not().isEmpty(),
],httpHorario.getHorarioId);

router.post('/agregar',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty()
],httpHorario.postHorario);

router.put('/ruta/:id',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty()
], httpHorario.putHorario);

router.delete('/ruta/:id', httpHorario.deleteHorario);

router.put('inactivarHorario/:id',httpHorario.putHorarioInactivar)
router.put('activarHorario/:id',httpHorario.putHorarioActivar)

export default router