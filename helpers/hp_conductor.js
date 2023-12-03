import Conductor from "../models/conductor.js";

const helpersConductor = {
    existeCedula: async (cedula)=>{
        const existe = await Conductor.findOne({cedula})
        if (existe) {
            throw new Error("La cedula ya esta registrada")
        }
    },
    validarCedulaUnica: async (id, cedula) => {
        try {
            const existe = await Conductor.findOne({
                cedula,
                _id: { $ne: id },
            });

            if (existe) {
                throw new Error("Ya existe un Conductor con esta cedula");
            }

            return true;
        } catch (error) {
            throw error;
        }
    },
}
export default helpersConductor