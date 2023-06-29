import { Router } from "express"
import httpTicket from "../controllers/ticket.js";
import { check } from "express-validator";

const router=new Router()

router.get('/ticket', httpTicket.getTicket);

router.get('/ticket/:id',[
    check("id", "Digite el id").not().isEmpty(),
],httpTicket.getTicketId);

router.post('/agregar',[
    check("vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("cliente_id", "Digite el id del cliente").isMongoId(),
    check("ruta_id", "Digite el id de la ruta").isMongoId(),
    check("bus_id", "Digite el id del bus").isMongoId(),
    check("fecha_venta","Digite la fecha").isDate().isEmpty(),
    check("hora_venta","Digite la hora").isDate().isEmpty(),
],httpTicket.postTicket);

router.put('inactivarTicket/:id',httpTicket.putTicketInactivar)
router.put('activarTicket/:id',httpTicket.putTicketActivar)

export default router