const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 80

app.get('/helloX', (req, res) => {
    res.send('Hello Express.js!');
});

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello Express.js!!' });
});

app.use((req, res, next) => {
    res.status(404).render('404', { url: req.originalUrl });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

