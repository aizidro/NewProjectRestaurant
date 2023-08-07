const express = require('express')
const cors = require('cors')

const router = require('./src/routes/rest.js')
const routerCardapio = require('./src/routes/cardapio.routes.js')
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use('/cardapio',routerCardapio)

app.listen(3000,() => {
    console.log("RESTAURANTE DO DEDE TA ON")
})
