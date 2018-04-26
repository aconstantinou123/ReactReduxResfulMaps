const express = require('express')
const server = express()
const parser = require('body-parser')
const cors = require('cors')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

server.use(parser.json())
server.use(parser.urlencoded({extended: true}))
server.use(cors())

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://holidaytracker.eu.auth0.com/.well-known/jwks.json'
    })
})

server.get('/', (req, res) => res.send('Hello World!'))

server.listen(5002, function(){
    console.log('Listening on port 5002')
})