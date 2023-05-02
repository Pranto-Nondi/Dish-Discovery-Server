const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const chefs = require('./Data/chefs.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send(`chef recipe is running`)
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    const selectedChef = chefs.find(e => e.id == id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`chef recipe is running on Port:${port}`)
})