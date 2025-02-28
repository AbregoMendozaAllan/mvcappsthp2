import { getAllClientes as getAllClientesDao } from "../config/clienteDao.js";


export default class ClientesController {
    static async getAllClientes(req, res) {
        try {
            const clientes = await getAllClientesDao();
            const var1 = "hola y adios"
            res.render('clientes/clientes', { clientes, var1 });
            //res.json(clientes);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error fetching clientes' });
        }
    };
}