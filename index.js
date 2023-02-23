require('dotenv').config()
const server = require('./src/server')

const PORT = process.env.PORT || 3333

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})