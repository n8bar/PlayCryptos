const express = require('express');
const app = express();
require('dotenv').config();

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE
});

// Connect and check for errors
pool.getConnection()
    .then(conn => {
        console.log("Connected to MariaDB!");
        conn.release(); // Release connection back to pool
    })
    .catch(err => {
        console.error("Unable to connect to MariaDB:", err);
    });


app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const homeRoutes = require('./routes/home');
const helloRoutes = require('./routes/hello');

app.use('/', homeRoutes);
app.use('/helloX', helloRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { url: req.originalUrl });
});

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

