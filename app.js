const express = require('express');
const app = express();
require('dotenv').config();

/*const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});
/**/
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

