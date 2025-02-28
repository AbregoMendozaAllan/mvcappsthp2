import express from 'express';
import router from './routes/router.js';
import sqldb from './config/sqldb.js';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, '192.168.1.2',()=>{
    console.log(`Server started on port ${ port } http://192.168.1.2:${ port }`);
});