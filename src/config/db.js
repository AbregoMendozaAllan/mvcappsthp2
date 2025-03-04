import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "seminario",
    connectionLimit: 5,
});


const executeQuery = async (query, params) => {
    const [rows] = await pool.query(query, params);
    return rows;
};

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to MySQL');
        connection.release();
    } catch (err) {
        console.error('Failed to connect to MySQL:', err);
        throw err;
    }
};

export { executeQuery, testConnection };