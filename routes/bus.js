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

router.put('/bus/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("cantidad_asientos", "Asientos disponibles requeridos").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
    validarCampos
], httpBus.putEditarBus);

router.delete('/bus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpBus.deleteBus);

router.put('inactivarBus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpBus.putBusInactivar)
router.put('activarBus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpBus.putBusActivar)

export default router

