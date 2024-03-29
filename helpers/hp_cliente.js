import Cliente from "../models/cliente.js";

const helpersCliente = {
    existeHolderById: async (id, req) => {
        const existe = await Cliente.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.ClienteUpdate = existe
    },
    existeCedula: async (cedula)=>{
        const existe = await Cliente.findOne({cedula})

        if(existe){
            throw new Error("Ya existe un cliente con esta cedula")
        }
    },
    validarCedulaUnica: async (id, cedula) => {
        try {
            const clienteExistente = await Cliente.findOne({
                cedula,
                _id: { $ne: id },
            });

            if (clienteExistente) {
                throw new Error("Ya existe un cliente con esta cedula");
            }

            return true;
        } catch (error) {
            throw error;
        }
    },
}
export default helpersCliente