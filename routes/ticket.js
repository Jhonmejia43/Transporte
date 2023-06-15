import { Router } from "express"
import httpTicket from "../controllers/ticket.js";
import { check } from "express-validator";

const router=new Router()

router.get('/ticket',[
    check("vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("cliente_id", "Digite el id del cliente").isMongoId(),
    check("ruta_id", "Digite el id de la ruta").isMongoId(),
    check("bus_id", "Digite el id del bus").isMongoId(),
    check("fecha_venta","Digite la fecha").isDate().isEmpty(),
    check("hora_venta","Digite la hora").isDate().isEmpty(),
]
,funcionesticket.getticket);

router.get('/ticket/:codigo',funcionesticket.getticketCodigo);

router.post('/agregar',funcionesticket.postAgregarticket);

router.put('/ticket/:codigo', funcionesticket.putEditarticket);

router.delete('/ticket/:codigo', funcionesticket.deleteticket);

export default router