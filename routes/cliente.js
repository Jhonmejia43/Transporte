import { Router } from "express"
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator"
import validarCampos from "../middlewares/validar.js"


const router = new Router()

router.get('/cliente', httpCliente.getCliente);

router.get('/cliente/:id', [
    check("id", "Digite el id").not().isEmpty(),
    validarCampos
], httpCliente.getClienteId);

router.post('cliente/agregar', [
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpCliente.postCliente);

router.put('/cliente/:id', [
    check("nombre", "Digite su nombre").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpCliente.putCliente);

router.delete('/cliente/:id', httpCliente.deleteCliente);

router.put('inactivarCliente/:id',httpCliente.putClienteInactivar)
router.put('activarCliente/:id',httpCliente.putClienteActivar)

export default router
