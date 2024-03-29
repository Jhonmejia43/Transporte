import Bus from "../models/bus.js";

const helpersBus = {
    existeHolderById: async (id, req) => {
        const existe = await Bus.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
        req.req.BusUpdate = existe
    },
    existePlaca: async (placa)=>{
        const existe = await Bus.findOne({placa})

        if(existe){
            throw new Error("La placa ya esta registrada")
        }
    },
    existeNumero: async (numero_bus)=>{
        const existe = await Bus.findOne({numero_bus})

        if(existe){
            throw new Error("Este numero de bus ya esta registrado")
        }
    },
    validarPlacaUnica: async (id, placa) => {
        try {
            const clienteExistente = await Bus.findOne({
                placa,
                _id: { $ne: id },
            });

            if (clienteExistente) {
                throw new Error("Ya existe un bus con esta placa");
            }

            return true;
        } catch (error) {
            throw error;
        }
    },
    validarNumeroUnico: async (id, numero_bus) => {
        try {
            const clienteExistente = await Bus.findOne({
                numero_bus,
                _id: { $ne: id },
            });

            if (clienteExistente) {
                throw new Error("Ya existe un bus con este numero");
            }

            return true;
        } catch (error) {
            throw error;
        }
    },
    
}
export default helpersBus