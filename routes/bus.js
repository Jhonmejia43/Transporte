import { Router } from "express"
import httpBus from "../controllers/bus.js"
import { check } from "express-validator"
import validarCampos from "../middlewares/validar.js"
import helpersBus from "../helpers/hp_bus.js"
import { validarJWT } from "../middlewares/validar-jwt.js"


const router = new Router()

router.get('/buses' ,httpBus.getBuses)

router.get('/bus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpBus.getBus);

router.post('/bus/agregar', [
    check("numero_bus", "Numero del bus").not().isEmpty(),
    check("placa", "Numero del bus").not().isEmpty(),
    check("cantidad_asientos", "Asientos disponibles").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
    check("ruta_id", "Digite el id de la ruta").not().isEmpty(),
    check("ruta_id", "No es Mongo ID").isMongoId(),
    validarCampos
], httpBus.postBus);

router.put('/bus/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("numero_bus", "Numero del bus").not().isEmpty(),
    check("placa", "Numero del bus").not().isEmpty(),
    check("cantidad_asientos", "Asientos disponibles").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
    check("ruta_id", "Digite el id de la ruta").not().isEmpty(),
    check("ruta_id", "No es Mongo ID").isMongoId(),
    validarCampos
], httpBus.putEditarBus);

router.delete('/bus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpBus.deleteBus);

router.put('/inactivarBus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpBus.putBusInactivar)
router.put('/activarBus/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpBus.putBusActivar)

export default router

