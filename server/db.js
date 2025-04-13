const Pool = require('pg').Pool;
const dotenv = require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sinaidb',
    port: 5432,
    password: dotenv.DB_PASSWORD

});

module.exports = pool;