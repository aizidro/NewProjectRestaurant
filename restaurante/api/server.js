const express = require('express')
const cors = require('cors')

const router = require('./src/routes/rest.js')
const routerCardapio = require('./src/routes/cardapio.routes.js')
const routerMotoboy = require('./src/routes/motoboy.routes.js')
const routerPedido = require('./src/routes/pedido.routes.js')
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use('/cardapio',routerCardapio)
app.use('/motoboy',routerMotoboy)
app.use('/pedido',routerPedido)

app.listen(3000,() => {
    console.log("RESTAURANTE DO DEDE TA ON")
})
