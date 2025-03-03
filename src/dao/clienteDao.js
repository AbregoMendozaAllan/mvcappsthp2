import { executeQuery } from '../config/db.js';

export const insertCliente = async(nombre, apellido, edad, telefono, ciudad) => {
    const query = `
            INSERT INTO clientes (codigo, nombre, apellido, edad, telefono, ciudad)
            VALUES (?, ?, ?, ?, ?, ?)
        `
    const params = [nombre, apellido, edad, telefono, ciudad];
    return await executeQuery(query, params);
}

export const getAllClientes = async() => {
    const query = `SELECT * FROM clientes`
    return await executeQuery(query);
}

export const deleteCliente = async(codigo) => {
    const query = `DELETE FROM clientes WHERE codigo = ?`;
    return await executeQuery(query, [id]);
}

export const getClienteById = async (id) => {
    const query = `SELECT * FROM clientes WHERE codigo = ?`;
    const [clientes] = await executeQuery(query, [id]);
    return clientes;
};

