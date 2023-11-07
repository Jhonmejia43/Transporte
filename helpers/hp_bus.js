import Bus from "../models/bus.js";

const helpersBus = {
    existeHolderById: async (id, req) => {
        const existe = await Bus.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
        req.req.BusUpdate = existe
    },
    placaValidator: async (req, res, next) => {
        console.log(req.body); 
    
        if (!req.body || !req.body.placa) {
            throw new Error('La placa no está definida en la solicitud');
        }
    
        const existingBus = await Bus.findOne({ placa: req.body.placa });
    
        if (existingBus) {
            throw new Error('La placa ya existe') ;
        }
        next();
    }

    
}
export default helpersBus