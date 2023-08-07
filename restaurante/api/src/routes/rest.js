const express = require("express");
const router = express.Router();
const cliente = require("../controllers/rest")

router.post("/cliente", cliente.create)
router.post("/autenticar", cliente.autenticar)
router.delete("/cliente/:id", cliente.deletar)
module.exports = router;