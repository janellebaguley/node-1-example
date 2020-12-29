//required for every server
const express = require('express')
const { get } = require('http')
const app = express()
const ctrl = require('./controller')

//in browser you'd test it: http://localhost:3100/test it'll return the res.send string in the browser
app.get('/', (req, res) => {
    res.send('home screen')
})

app.get('/api/test', (req, res) => {
    res.send('is this what you are looking for?')
})

app.get('/api/reject', (req, res) => {
    res.status(400).send('this was a bad request')
})

app.get('/api/users', ctrl.getAllUsers)

app.get('./api/user/:id', ctrl.getSingleUser)

app.listen(3100, () => console.log('Listening on port 3100'))