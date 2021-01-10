const express = require ('express');
const cors = require('cors');
const port = 3000;
require('./database/connection');

const app = express();

app.use(cors());

//routes
app.use('/laudos', require('./routes/laudos.js'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

module.exports = app;