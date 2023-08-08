const express = require("express");
const router = express.Router();
const pedido = require("../controllers/pedido")

router.post('/criar' ,pedido.create)