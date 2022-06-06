/** @format */

const express = require('express')

const handlers = require('./lib/handlers')

var b = 0

const port = process.env.PORT || 3033
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/api/login', (req, res) => {
    if (req.body.user === 'admin' && req.body.password === 'admin') {
        res.send({
            token: 'token123',
        })
    } else {
        res.send({ token: 'nope' })
    }
})
/* app.post("/api/login", handlers.postLogin); */

app.listen(port, () => {
    console.log(
        `Express started on http://localhost:${port}` +
            '; press Ctrl-C to terminate.',
    )
})
