const express = require ('express');
const cors = require('cors');
const routes = require ('./routes.js');

const app = espress();
app.use(routes);

app.listen(8000);