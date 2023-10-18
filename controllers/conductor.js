import Conductor from "../models/conductor.js";

const httpConductor ={
    getConductor: async (req, res) => {
        try {
            const conductor = await Conductor.find().populate("id_bus", "numero_bus placa cantidad_asientos empresa_asignada")
            res.json({ conductor })

        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getConductorId: async (req, res) => {
        const { id } = req.params
        try {
            const conductor = await Conductor.findById(id).populate("id_bus", "numero_bus placa cantidad_asientos empresa_asignada")
            res.json({ conductor })

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    postConductor: async (req, res) => {
        try {
            const { cedula, nombre, id_bus, experiencia, telefono } = req.body
            const conductor = new Conductor({ cedula, nombre, id_bus, experiencia, telefono })
            await conductor.save()

            res.json({ conductor })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    putConductor: async (req, res) => {
        try {
            const { id } = req.params
            const { cedula, nombre, id_bus, experiencia, telefono  } = req.body
            const conductor = await
                Conductor.findByIdAndUpdate(id, { cedula, nombre, id_bus, experiencia, telefono }, { new: true });
            res.json({conductor})
        } catch (error) {
            res.status(400).json({error})
        }

    },
    deleteConductor: async (req,res) => {
        try {
            const { id } = req.params
            const conductor = await Conductor.findByIdAndDelete(id)
            res.json(conductor + `Conductor eliminado`)
        } catch (error) {
            res.status(400).json({error})
        }
    },
    putConductorInactivar: async (req,res)=>{
        try {
            const {id}=req.params
            const conductor=await Conductor.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({conductor})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putConductorActivar: async (req,res)=>{
        try {
            const {id}=req.params
            const conductor=await Conductor.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({conductor})
        } catch (error) {
            res.status(400).json({error})
        }
    }

}
export default httpConductor