import Ruta from "../models/ruta.js";

const helpersRuta = {
    existeRuta: async (horario_id, req) => {
        const {origen, destino} = req.req.body;

        const existe = await Ruta.findById({
            horario_id: horario_id,
            origen: origen,
            destino: destino
        })

        if (!existe) {
            throw new Error(`Esta ruta ya existe`)
        }
    },
    exsteRutaEditar: async(id, req)=>{
        const {horario_id, origen, destino} = req.req.body;

        const existe = await Ruta.find({
            horario_id: horario_id,
            origen: origen,
            destino: destino,
            _id: { $ne: id },
        })

        if (!existe) {
            throw new Error(`Esta ruta ya existe`)
        }
    }

}
export default helpersRuta