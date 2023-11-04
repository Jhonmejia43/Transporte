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
        console.log(req.body); // Verifica el contenido de req.body
        const placa = req.body?.placa; // Asegúrate de acceder a placa correctamente
        console.log(placa); // Verifica el valor de placa
    
        if (!placa) {
            return res.status(400).json({ message: 'La placa no está definida en la solicitud' });
        }
    
        const existingBus = await Bus.findOne({ placa });
    
        if (existingBus) {
            return res.status(400).json({ message: 'La placa ya existe' });
        }
        next();
    }

    
}
export default helpersBus