const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const routes = require('./routes')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
// app.use(express.static(`${__dirname}/client/build`))

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
//    })
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))