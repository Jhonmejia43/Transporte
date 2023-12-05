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
    validarAsiento: async (no_asiento, req) => {
        const { bus_id, ruta_id, fecha_departida } = req.req.body;

        console.log("r", ruta_id);
        const divFecha = fecha_departida.split("T");
        console.log(divFecha);


        const f1 = new Date(divFecha[0] + "T00:00:00.000Z");
        const f2 = new Date(divFecha[0] + "T23:59:59.000Z");

        const buscar = await Ticket.findOne({
            ruta_id,
            bus_id,
            fecha_departida: { $gte: f1, $lte: f2 },
        })
            .populate("bus_id")
            .populate("ruta_id")

        console.log("b", buscar);

        console.log(no_asiento);

        if (buscar) {
            const num_asiento_buscar = buscar.no_asiento;
            const asiento_bus = buscar.bus_id.cantidad_asientos;
            if (num_asiento_buscar === no_asiento)
                throw new Error(`Asiento ${ no_asiento } ya está ocupado`)
            if (asiento_bus < no_asiento || no_asiento < 0)
                throw new Error(`Asiento erróneo`)
        }
    },
}
export default helpersTicket