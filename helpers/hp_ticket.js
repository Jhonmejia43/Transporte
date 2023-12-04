import Ticket from "../models/ticket.js";

const helpersTicket = {
    existeHolderById: async (id, req) => {
        const existe = await Ticket.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.TicketUpdate = existe
    },

    validarAsientoDisponible: async (busId, rutaId, fechaPartida, noAsiento) => {
        try {
          const tickets = await Ticket.find({
            bus_id: busId,
            ruta_id: rutaId,
            fecha_departida: fechaPartida,
          });
    
          const asientosOcupados = tickets.map(ticket => ticket.no_asiento);
    
          if (asientosOcupados.includes(noAsiento)) {
            throw new Error(`El asiento ${noAsiento} ya está ocupado`);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
      validarAsientoDisponibleEditar: async (ticketId, busId, rutaId, fechaPartida, noAsiento) => {
        try {
          const tickets = await Ticket.find({
            bus_id: busId,
            ruta_id: rutaId,
            fecha_departida: fechaPartida,
            _id: { $ne: ticketId },
          });
    
          const asientosOcupados = tickets.map(ticket => ticket.no_asiento);
    
          if (asientosOcupados.includes(noAsiento)) {
            throw new Error(`El asiento ${noAsiento} ya está ocupado`);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
}
export default helpersTicket