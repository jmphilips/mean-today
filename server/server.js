'use strict'

const express = require('express')

const app = express();

app.use(express.static('client'));

const PORT = process.env.PORT || 3000;



app.use((req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})