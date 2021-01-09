const express = require('express');
const routes = express.Router();
const laudoController = require('./controller/laudoController.js');

routes.get('/searchlaudo/:placa', laudoController.searchone);
routes.get('/searchlaudo', laudoController.getall);


module.exports = routes;