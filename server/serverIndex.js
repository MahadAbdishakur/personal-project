require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getArcs, getCharecters} = require("./controller.js")

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)
app.get("/arcs", getArcs)
app.get("/charecters", getCharecters)
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))