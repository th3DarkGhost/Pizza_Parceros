const express = require('express');
const app = express();
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 4000);
// middlewares -> funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors());
app.use(express.json());
//routes
app.use('/api/pizzas', require('./routes/pizzaRoute'));

exports.app = app;
