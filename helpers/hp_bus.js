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
        const { placa } = req.body.placa;
        const existingBus = await Bus.findOne({ placa });
    
        if (existingBus) {
            return res.status(400).json({ message: 'La placa ya existe' });
        }
        next();
    }

    
}
export default helpersBus