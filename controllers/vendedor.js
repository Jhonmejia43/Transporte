import Vendedor from "../models/vendedor.js";

const httpVendedor = {
    getVendedor: async (req, res) => {
        try {
            const vendedor = await Vendedor.find()
            res.json({ vendedor })
            
        } catch (error) {
            res.status(400).json({error})
        }

    },

    getVendedorId: async (req, res) => {
        const {id}=req.params
        try {
            const vendedor = await Vendedor.findById({id})
            res.json({ vendedor })
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    postVendedor: async (req, res) => {
        try {
            const { cedula, nombre, cuenta, clave, telefono} = req.body
            const vendedor = new Vendedor({ cedula, nombre, cuenta, clave, telefono})
            await vendedor.save()

            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    putVendedor: async (req,res) => {
        try {
            const {id}=req.params
            const {nombre,cuenta, clave, telefono}=req.body
            const vendedor=await 
                Vendedor.findByIdAndUpdate(id,{nombre,cuenta, clave, telefono},{new:true});
                res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    deleteVendedor: async()=>{
        try {
            const {id}=req.params
            const vendedor= await Vendedor.findByIdAndRemove({id})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    putVendedorInactivar: async ()=>{
        try {
            const {id}=req.params
            const vendedor=await Vendedor.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putVendedorActivar: async ()=>{
        try {
            const {id}=req.params
            const vendedor=await Vendedor.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
        }
    }
};

export default httpVendedor;