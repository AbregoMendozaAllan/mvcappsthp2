import express from 'express';
import router from './routes/router.js';
import { testConnection } from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(port, hostname,()=>{
    console.log(`Server started on port ${ port } http://${hostname}:${ port }`);
});

testConnection()
    .then(() => {
        console.log('Database connection test complete');
    })
    .catch((err) => {
        console.error('Database connection test failed:', err);
    });