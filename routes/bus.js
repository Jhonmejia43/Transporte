import { Router } from "express"
import httpBus from "../controllers/bus.js"
import  {check} from "express-validator"


const router=new Router()

router.get('/bus',[
    check("cantidad_asientos", "Asientos disponibles").not().isEmpty(),
    check("empresa_asignada", "Nombre de la empresa").not().isEmpty(),
],httpBus.getBus);

// router.get('/bus/:codigo',funcionesbus.getbusCodigo);

// router.post('/agregar',funcionesbus.postAgregarbus);

// router.put('/bus/:codigo', funcionesbus.putEditarbus);

// router.delete('/bus/:codigo', funcionesbus.deletebus);

export default router

