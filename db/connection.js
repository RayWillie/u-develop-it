const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL username
        user: 'root',
        // MYSQL password
        password: 'password',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
module.exports = db;