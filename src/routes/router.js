import express from 'express';
import {getAllClientes, getClienteDetalle} from '../controllers/clientesController.js';


const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello world!');
})

router.get('/Clientes', getAllClientes)

router.get('/Empleados', (req,res)=>{
    res.send('ruta de empleados');
})

router.get("/clienteDetalle/:action/:codigo", getClienteDetalle);

export default router;