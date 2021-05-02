const getCounter    = require('./routes/getCounter')
const updateCounter = require('./routes/updateCounter')
const deleteCounter = require('./routes/deleteCounter')
const insertCounter = require('./routes/insertCounter')

const express       = require('express')

const app = express()

// JSON Parser
app.use(express.json())

//https://stackoverflow.com/questions/36878255/allow-access-control-allow-origin-header-using-html5-fetch-api
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', "*");
  next();
}
app.use(allowCrossDomain);

// routes
app.get('/getcounter', getCounter)
app.post('/updateCounter', updateCounter)
app.post('/insertCounter', insertCounter)
app.delete('/deleteCounter/:name', deleteCounter)

// api
app.use('/', express.static('publicServer'))

// const port = process.env.PORT || 3000
const port = 8080
app.listen(port, () => console.log(`Server listening at ${port}`))