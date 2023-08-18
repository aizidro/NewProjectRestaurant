const express = require("express");
const router = express.Router();
const pedido = require("../controllers/pedidos");

router.post('/criar' ,pedido.create)

module.exports = router;