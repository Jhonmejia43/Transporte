import { validationResult } from "express-validator";
import Bus from "../models/bus.js";

const httpBus = {
    getBus: async (req, res) => {
        try {
            const { numero_bus } = req.params;
            // Realiza la búsqueda del bus en la base de datos usando el número del bus
            const bus = await Bus.findOne({ numero_bus });
            if (!bus) {
                return res.status(404).json({ error: "Bus no encontrado" });
            }
            res.json(bus);
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }  
    },

    postBus: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { numero_bus, cantidad_asientos, empresa_asignada } = req.body;

            // Crear una nueva instancia del modelo Bus con los datos proporcionados
            const nuevoBus = new Bus({
                numero_bus,
                cantidad_asientos,
                empresa_asignada
            });

            // Guardar el nuevo bus en la base de datos
            await nuevoBus.save();

            res.json(nuevoBus);
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    },
    postBuscarBus: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { numero_bus } = req.body;

            // Realiza la búsqueda del bus en la base de datos utilizando el número del bus
            const bus = await Bus.findOne({ numero_bus });

            if (!bus) {
                return res.status(404).json({ error: "Bus no encontrado" });
            }

            res.json(bus);
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    },
    putEditar: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { numero_bus } = req.params;
            const { cantidad_asientos } = req.body;

            // Buscar y actualizar el bus en la base de datos
            const bus = await Bus.findByIdAndUpdate(
                numero_bus,
                { cantidad_asientos },
                { new: true }
            );

            if (!bus) {
                return res.status(404).json({ error: "Bus no encontrado" });
            }

            res.json(bus);
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    },
    deleteBus: async (req, res) => {
        try {
            const { numero_bus } = req.params;

            // Buscar y eliminar el bus por su número en la base de datos
            const bus = await Bus.findOneAndDelete({ numero_bus });

            if (!bus) {
                return res.status(404).json({ error: "Bus no encontrado" });
            }

            res.json({ message: "Bus eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    }
}

export default httpBus