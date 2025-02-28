import express from 'express';
import ClientesController from '../controllers/ClientesController.js';


const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello world!');
})

router.get('/Clientes', ClientesController.getAllClientes)

router.get('/Empleados', (req,res)=>{
    res.send('ruta de empleados');
})

export default router;