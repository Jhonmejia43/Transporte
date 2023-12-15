import Ruta from "../models/ruta.js";

const helpersRuta = {
    existeRuta: async (horario_id, req) => {
        try {
            const { origen, destino } = req.body;
        
            const rutaExistente = await Ruta.findOne({ origen, destino });
        
            if (rutaExistente) {
              return res.status(400).json({ error: 'La ruta ya existe' });
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error interno del servidor' });
          }
    },
    exsteRutaEditar: async(id, req)=>{
        const {horario_id, origen, destino} = req.req.body;

        const existe = await Ruta.findOne({
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