const getCounter    = require('./routes/getCounter')
const updateCounter = require('./routes/updateCounter')
const express       = require('express')

const app = express()

// JSON Parser
app.use(express.json())

// routes
app.get('/getcounter', getCounter)
app.post('/updateCounter', updateCounter)

// api
//app.use('/', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))