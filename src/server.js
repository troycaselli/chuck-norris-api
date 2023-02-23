const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const jokesRouter = require('./jokes/router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/jokes', jokesRouter)

server.use('*', (req, res, next) => {
    res.status(404).json(`Path ${req.originalUrl} does not exist`)
})

server.use((error, req, res, next) => {
    res
        .status(error.status || 500)
        .json(error.message || 'Something bad happened')
})

module.exports = server;