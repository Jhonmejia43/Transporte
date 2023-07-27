import { Router } from "express"
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"


const router=new Router()

router.get('/ruta',httpRuta.getRuta);


router.get('/ruta/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpRuta.getRutaId);


router.post('/agregar',[
    check("precio","Digite su precio").not().isEmpty(),
    check("origen","Digite su origen").not().isEmpty(),
    check("destino","Digite su destino").not().isEmpty(),
    validarCampos
],httpRuta.postRuta);

router.put('/ruta/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("id","Digite su id").not().isEmpty(),
    check("precio","Digite su precio").not().isEmpty(),
    check("origen","Digite su origen").not().isEmpty(),
    check("destino","Digite su destino").not().isEmpty(),
    validarCampos
],httpRuta.putRuta);

router.delete('/ruta/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpRuta.getRutaId);

router.put('inactivarRuta/:id',[],httpRuta.putRutaInactivar)
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
router.put('activarRuta/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpRuta.putRutaActivar)

export default router