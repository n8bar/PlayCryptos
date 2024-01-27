const express = require('express');
const app = express();
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('Hello Express.js!');
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});