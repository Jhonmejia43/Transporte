import { Router } from "express"
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator"

const router = new Router()

router.get('/cliente', [
], httpCliente.getCliente);

router.get('/cliente/:id', [
    check("id", "Digite su cedula").not().isEmpty(),
], httpCliente.getClienteId);

router.post('cliente/agregar', [
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty()
], httpCliente.postCliente);

router.put('/cliente/:id', [
    check("nombre", "Digite su nombre").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty()
], httpCliente.putCliente);

router.delete('/cliente/:id', httpCliente.de);

export default router
