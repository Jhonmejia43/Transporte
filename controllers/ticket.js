import Ticket from "../models/ticket.js";

const httpTicket ={
    getTicket: async (req, res) => {
        try {
            const ticket = await Ticket.find()
            res.json({ ticket })

        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getTicketId: async (req, res) => {
        const { id } = req.params
        try {
            const ticket = await Ticket.findById({id})
            res.json({ ticket })

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    postTicket: async (req, res) => {
        try {
            const { vendedor_id, cliente_id, ruta_id, bus_id, fecha_venta} = req.body
            const ticket = new Ticket({ vendedor_id, cliente_id, ruta_id, bus_id, fecha_venta })
            await ticket.save()

            res.json({ ticket })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    
    deleteHorario: async () => {
        try {
            const { id } = req.params
            const horario = await Horario.findByIdAndDelete(id)
            res.json(horario + `Horario eliminado`)
        } catch (error) {
            res.status(400).json({error})
        }
    }
}
export default httpTicket