"use-strict"

const express = require("express")
const app = express()
const eaip = require("./controllers/eaip")

const PORT = process.env.PORT  || 8000
const IPADDRESS = process.env.IPADDRESS || '0.0.0.0'

app.get('/ping', (req, res) => {
    res.send('CAVOK-server says pong!')
})

app.get('/', (req, res) => {
    res.send('CAVOK-server')
})

app.get('/aip', eaip.get)
app.get('/aip/:dataset', eaip.get)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(PORT, IPADDRESS, () => {
    console.log('CAVOK-server on http://%s:%s', IPADDRESS, PORT)
})