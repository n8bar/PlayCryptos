const express = require('express');
const router = express.Router();

router.get('/helloX', (req, res) => {
    res.send('Hello Express.js!');
});

module.exports = router;
