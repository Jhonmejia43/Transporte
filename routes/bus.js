import { Router } from "express"
import httpBus from "../controllers/bus.js"
import { check } from "express-validator"


const router = new Router()

router.get('/bus/:numero_bus', [
], httpBus.getBus);

router.post('/bus/agregar', [
    check("numero_bus", "Numero del bus").not().isEmpty(),
    check("cantidad_asientos", "Asientos disponibles").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
], httpBus.postBus);

router.post('/bus/buscar', [
    check("numero_bus", "Número de bus requerido").not().isEmpty()
], httpBus.postBuscarBus);

router.put('/bus/:numero_bus', [
    check("cantidad_asientos", "Asientos disponibles requeridos").not().isEmpty()
], httpBus.putEditar);

router.delete('/bus/:numero_bus', httpBus.deleteBus);

export default router
