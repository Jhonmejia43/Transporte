import Ticket from "../models/ticket.js";
import Bus from "../models/bus.js"

const helpersTicket = {
    existeHolderById: async (id, req) => {
        const existe = await Ticket.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.TicketUpdate = existe
    },

    validarAsientoDisponible: async (bus_id, ruta_id, fecha_departida, no_asiento) => {
        try {
          const tickets = await Ticket.find({
            bus_id: bus_id,
            ruta_id: ruta_id,
            fecha_departida: fecha_departida,
          });
    
          const asientosOcupados = tickets.map(ticket => ticket.no_asiento);
    
          if (asientosOcupados.includes(no_asiento)) {
            throw new Error(`El asiento ${no_asiento} ya está ocupado`);
          }
        } catch (error) {
          throw new Error(error);
        }
      },
      validarAsientoDisponibleEditar: async (id, bus_id, ruta_id, fecha_departida, no_asiento) => {
        try {
          const bus = await Bus.findById(bus_id);
          const totalAsientos = bus.cantidad_asientos;
      
          if (no_asiento < 1 || no_asiento > totalAsientos) {
            throw new Error(`El número de asiento debe estar entre 1 y ${totalAsientos}`);
          }
      
          const tickets = await Ticket.find({
            bus_id: bus_id,
            ruta_id: ruta_id,
            fecha_departida: fecha_departida,
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