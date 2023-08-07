const express = require('express');

const router = express.Router();

const cliente = require('./controllers/cliente.controller');
const motoboy = require('./controllers/motoboy.controller');
const cardapio = require('./controllers/cardapio.controller');

router.get('/', (req, res) => { return res.json("API Restaurante respondendo") });

router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

router.get('/cardapio', cardapio.read);
router.post('/cardapio', cardapio.create);
router.put('/cardapio', cardapio.update);
router.delete('/cardapio/:id', cardapio.del);


router.get('/cliente/:id', cliente.read);
router.get('/cliente', cliente.read);
router.post('/cliente', cliente.create);
router.put('/cliente', cliente.update);
router.delete('/cliente/:id', cliente.del);

module.exports = router;