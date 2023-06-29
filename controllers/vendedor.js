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

    getVendedorCedula: async (req, res) => {
        const {cedula}=req.params
        try {
            const vendedor = await Vendedor.find({cc:cedula})
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
            const {cedula,nombre,cuenta, clave, telefono}=req.body
            const vendedor=await 
                Vendedor.findByIdAndUpdate(id,{cedula,nombre,cuenta, clave, telefono},{new:true});
                res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    deleteVendedor: async()=>{
        try {
            const {id}=req.params
            const vendedor= await Vendedor.findOneAndDelete({id})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({error})
        }
    },
};

export default httpVendedor;