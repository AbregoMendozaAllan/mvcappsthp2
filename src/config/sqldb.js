import mysql from 'mysql';

const sqldb = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

sqldb.connect((error)=>{
    if(error){
        console.log(`Se presento un error: ${error}`);
    }
    console.log(`Conexion existosa`);
});

export default sqldb;