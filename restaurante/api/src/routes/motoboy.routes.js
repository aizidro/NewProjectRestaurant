const express = require("express");
const router = express.Router();
const motoboy = require("../controllers/motoboy")

router.post('/criar' ,motoboy.create)
router.get('/listar/:id' ,motoboy.listar)
router.get('/listar/' ,motoboy.listar)
router.delete('/:id', motoboy.deletar)
module.exports = router;