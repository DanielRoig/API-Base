const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const app = express();
require('dotenv').config();
require('./database');

const port = process.env.PORT || 3000;

// Settings
app.set('port', port);

// Middlewares
app.use(cors());
app.use(helmet())
app.use(express.json());

// Routes
app.use('/api/v1/user', require('./routes/user.routes'))
app.use('/api/v1/post', require('./routes/posts.routes'))

// Starting the server
app.listen(app.get('port'),'0.0.0.0', () => {
    console.log(`Server up and running on port ${app.get('port')}`);
});

module.exports = app; //Necesario para el testeo