import {
    getAllClientes as getAllClientesDao,
    getClienteById,
    deleteCliente as deleteClienteDao,
    updateCliente as updateClienteDao,
    insertCliente as insertClienteDao} from "../dao/clienteDao.js";

export const getAllClientes = async(req, res) => {
    try {
        const clientes = await getAllClientesDao();
        const var1 = "hola y adios"
        res.render('clientes/clientes', { clientes, var1 });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching clientes' });
    }
}

export const getClienteDetalle = async (req, res) => {
    try {
        const { action, codigo } = req.params;
        //console.log(`Action: ${action}, Codigo: ${codigo}`);
        //if (!codigo) return res.status(400).send("Error: Missing ID");
        const cliente = await getClienteById(codigo);
        //console.log(cliente);
        res.render("clientes/clienteDetalle", { cliente, action });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching client details" });
    }
};

export const deleteCliente = async (req, res) => {
    try {
        const { codigo } = req.params;
        //console.log(`Codigo: ${codigo}`);
        await deleteClienteDao(codigo);
        res.send('<script>alert("Cliente borrado exitosamente"); window.location.href = "/clientes"</script>');
    } catch (error) {
        console.log(error);
        res.send('<script>alert("Cliente no se pudo borrar"); window.location.href = "/clientes"</script>');
    }
}

export const updateCliente = async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const body = {codigo, ...req.body};
        //console.log(body);
        await updateClienteDao(...Object.values(body));
        res.send('<script>alert("Cliente actualizado exitosamente"); window.location.href = "/clientes"</script>');
    } catch (error) {
        console.log(error);
        res.send('<script>alert("Error al actualizar cliente"); window.location.href = "/clientes"</script>');
    }
};

export const insertCliente = async (req, res) => {
    try {
        const body = req.body;
        //console.log(body);
        await insertClienteDao(...Object.values(body));
        res.send('<script>alert("Cliente insertado"); window.location.href = "/clientes"</script>');
    } catch (error) {
        console.log(error);
    }
}