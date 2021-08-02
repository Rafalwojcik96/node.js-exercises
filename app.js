const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/kontakt', (req, res) => {
    res.render('kontakt')
})

app.listen(port)

const utils = require("./utils")
utils.greeting()
utils.add(4, 5)

