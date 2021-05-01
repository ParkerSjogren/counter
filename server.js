const getCounter    = require('./routes/getCounter')
const updateCounter = require('./routes/updateCounter')
const deleteCounter = require('./routes/deleteCounter')
const insertCounter = require('./routes/insertCounter')

const express       = require('express')

const app = express()

// JSON Parser
app.use(express.json())

// routes
app.get('/getcounter', getCounter)
app.post('/updateCounter', updateCounter)
app.post('/insertCounter', insertCounter)
app.delete('/deleteCounter/:name', deleteCounter)

// api
//app.use('/', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))