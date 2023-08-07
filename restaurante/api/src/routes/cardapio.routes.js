const express = require("express");
const router = express.Router();
const cardapio = require("../controllers/cardapio")

router.post('/criar' ,cardapio.create)
router.get('/', cardapio.listar)
router.delete('/:id', cardapio.deletar)
module.exports = router;