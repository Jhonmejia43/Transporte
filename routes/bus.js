import { Router } from "express"
import httpBus from "../controllers/bus.js"
import { check } from "express-validator"
import validarCampos from "../middlewares/validar.js"


const router = new Router()

router.get('/bus/:numero_bus', httpBus.getBus);

router.post('/bus/agregar', [
    check("numero_bus", "Numero del bus").not().isEmpty(),
    check("cantidad_asientos", "Asientos disponibles").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
    validarCampos
], httpBus.postBus);

router.put('/bus/:numero_bus', [
    check("cantidad_asientos", "Asientos disponibles requeridos").not().isEmpty(),
    validarCampos
], httpBus.putEditarBus);

router.delete('/bus/:numero_bus', httpBus.deleteBus);

router.put('inactivarBus/:id',httpBus.putBusInactivar)
router.put('activarBus/:id',httpBus.putBusActivar)

export default router

