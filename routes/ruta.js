import { Router } from "express"
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";

const router=new Router()

router.get('/ruta',httpRuta.getRuta);


router.get('/ruta/:id',[
    check("id","Digite su id").not().isEmpty(),
],httpRuta.getRutaId);


router.post('/agregar',[
    check("precio","Digite su precio").not().isEmpty(),
    check("origen","Digite su origen").not().isEmpty(),
    check("destino","Digite su destino").not().isEmpty()
],httpRuta.postRuta);

router.put('/ruta/:id', [
    check("id","Digite su id").not().isEmpty(),
    check("precio","Digite su precio").not().isEmpty(),
    check("origen","Digite su origen").not().isEmpty(),
    check("destino","Digite su destino").not().isEmpty()
],httpRuta.putRuta);

router.delete('/ruta/:id',[
    check("id","Digite su id").not().isEmpty(),
],httpRuta.getRutaId);

export default router