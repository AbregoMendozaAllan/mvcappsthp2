import express from 'express';
import {
    deleteCliente,
    getAllClientes,
    getClienteDetalle,
    insertCliente,
    updateCliente
} from '../controllers/clientesController.js';


const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello world!');
})

router.get('/Clientes', getAllClientes)

router.get('/Empleados', (req,res)=>{
    res.send('ruta de empleados');
})

router.get("/clienteDetalle/:action/:codigo", getClienteDetalle);

router.post("/clienteDetalle/eliminar/:codigo", deleteCliente);

router.post("/clienteDetalle/actualizar/:codigo", updateCliente);

router.get("/clienteDetalle/insertar", (req,res)=>{
    res.render('clientes/clienteInsertar');
});

router.post("/clienteDetalle/insertar", insertCliente);


export default router;