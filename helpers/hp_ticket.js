import Ticket from "../models/ticket.js";

const helpersTicket = {
    existeHolderById: async (id, req) => {
        const existe = await Ticket.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.TicketUpdate = existe
    },

    validarAsientoDisponible: async (busId, rutaId, fechaPartida, no_asiento) => {
        try {
          const tickets = await Ticket.find({
            bus_id: busId,
            ruta_id: rutaId,
            fecha_departida: fechaPartida,
          });
    
          const asientosOcupados = tickets.map(ticket => ticket.no_asiento);
    
          if (asientosOcupados.includes(no_asiento)) {
            throw new Error(`El asiento ${no_asiento} ya está ocupado`);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
      validarAsientoDisponibleEditar: async (id, busId, rutaId, fechaPartida, no_asiento) => {
        try {
          const tickets = await Ticket.find({
            bus_id: busId,
            ruta_id: rutaId,
            fecha_departida: fechaPartida,
            _id: { $ne: id },
          });
    
          const asientosOcupados = tickets.map(ticket => ticket.no_asiento);
    
          if (asientosOcupados.includes(no_asiento)) {
            throw new Error(`El asiento ${no_asiento} ya está ocupado`);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
}
export default helpersTicket