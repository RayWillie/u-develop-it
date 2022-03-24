const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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


// Test connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.query(`SELECT * FROM candidatea`, (err, rows) => {
    console.log(rows);
});
// Start server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});