import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const conexao = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PAS,
    database: process.env.DB_NAME
});

conexao.connect();
const conexaoPromise = conexao.promise();


export default conexaoPromise;
