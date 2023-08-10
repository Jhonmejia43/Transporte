import Ticket from "../models/ticket.js";

const httpTicket ={
    getTicket: async (req, res) => {
        try {
            const ticket = await Ticket.find().populate("vendedor_id").populate("cliente_id")
            .populate("ruta_id").populate("bus_id")
            res.json({ ticket })

        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getTicketId: async (req, res) => {
        const { id } = req.params
        try {
            const ticket = await Ticket.findById(id).populate("vendedor_id").populate("cliente_id")
            .populate("ruta_id").populate("bus_id")
            res.json({ ticket })

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    getTicketsPorFechas: async (req, res) => {
        try {
            const { fechaInicio, fechaFin } = req.query;
            
        if (!fechaInicio || !fechaFin) {
            return res.status(400).json({ error: 'Debes proporcionar fechas de inicio y fin.' });
        }
    
        const tickets = await Ticket.find({
            fechahora_venta: {
                $gte: new Date(fechaInicio),
                $lte: new Date(fechaFin),
            },
        }).populate("vendedor_id").populate("cliente_id").populate("ruta_id").populate("bus_id");
    
        res.json({ tickets });
        } catch (error) {
            res.status(400).json({ error })
            res.status(500).json({ error: 'Error al obtener los tickets.' });
        }
    },

    postTicket: async (req, res) => {
        try {
            const { vendedor_id, cliente_id, ruta_id, bus_id, fechahora_venta} = req.body
            const ticket = new Ticket({ vendedor_id, cliente_id, ruta_id, bus_id, fechahora_venta })
            await ticket.save()

            res.json({ ticket })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    deleteTicket: async(req,res)=>{
        try {
            const {id}=req.params
            const ticket= await Ticket.findByIdAndRemove(id)
            res.json({ticket})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    
    putTicketInactivar: async (req,res)=>{
        try {
            const {id}=req.params
            const ticket=await Ticket.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({ticket})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putTicketActivar: async (req,res)=>{
        try {
            const {id}=req.params
            const ticket=await Ticket.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({ticket})
        } catch (error) {
            res.status(400).json({error})
        }
    }
    
}
export default httpTicket