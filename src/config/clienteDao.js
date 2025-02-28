import sqldb from './sqldb.js';

const getAllClientes = ()=> {
    //Promise takes executor function with resolve, reject parameters
    return new Promise((resolve,reject)=>{
        sqldb.query('SELECT * FROM clientes', (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
};

export { getAllClientes };