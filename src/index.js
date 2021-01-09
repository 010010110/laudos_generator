const express = require ('express');
const cors = require('cors');
const routes = require ('./routes.js');

const app = express();

//routes
app.use('/laudos', require('./routes/laudos.js'))

app.listen(8000);