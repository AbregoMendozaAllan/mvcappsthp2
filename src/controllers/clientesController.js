import {getAllClientes as getAllClientesDao, getClienteById} from "../dao/clienteDao.js";

export const getAllClientes = async(req, res) => {
    try {
        const clientes = await getAllClientesDao();
        const var1 = "hola y adios"
        res.render('clientes/clientes', { clientes, var1 });
        //res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching clientes' });
    }
}

export const getClienteDetalle = async (req, res) => {
    try {
        const { action, codigo } = req.params;
        console.log(`Action: ${action}, Codigo: ${codigo}`);
        if (!codigo) return res.status(400).send("Error: Missing ID");

        const cliente = await getClienteById(codigo);
        console.log(cliente);
        res.render("clientes/clienteDetalle", { cliente, action });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching client details" });
    }
};
