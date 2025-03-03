import express from 'express';
import router from './routes/router.js';
import { testConnection } from './config/db.js';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, '192.168.1.2',()=>{
    console.log(`Server started on port ${ port } http://192.168.1.2:${ port }`);
});

testConnection()
    .then(() => {
        console.log('Database connection test complete');
    })
    .catch((err) => {
        console.error('Database connection test failed:', err);
    });