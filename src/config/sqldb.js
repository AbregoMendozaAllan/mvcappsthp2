import mysql from 'mysql';

const sqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@M3ndoZ1991MApass',
    database: 'seminario',
})

sqldb.connect((error)=>{
    if(error){
        console.log(`Se presento un error: ${error}`);
    }
    console.log(`Conexion existosa`);
});

export default sqldb;