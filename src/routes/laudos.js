const express = require('express');
const Laudos = require('../models/Laudos.js');
const router = express.Router();


router.get('/:placa', async (req, res) => {
    const placa = req.params.placa;
    const response = await new Laudos().getLaudo(placa);

    res.send(response);
});

module.exports = router;