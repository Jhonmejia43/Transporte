import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";

const router=new Router()

router.get('/vendedor',httpVendedor.getVendedor);

router.get('/vendedor/:id',httpVendedor.getVendedorId);

router.post('/agregar',[
    check("cedula","Digite su cedula").not().isEmpty(),
    check("nombre","Digite su nombre").not().isEmpty(),
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
    check("telefono","Digite su telefono").not().isEmpty(),
],httpVendedor.postVendedor);

router.put('/vendedor/:id',[
    check("nombre","Digite su nombre").not().isEmpty(),
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
    check("telefono","Digite su telefono").not().isEmpty(),
], httpVendedor.putVendedor);

router.delete('/vendedor/:id', httpVendedor.deleteVendedor);

router.put('inactivarVendedor/:id',httpVendedor.putVendedorInactivar)
router.put('activarVendedor/:id',httpVendedor.putVendedorActivar)

export default router
