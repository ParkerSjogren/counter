const express = require('express')
const counters   = require('../model/countersInMongo')    

let router = express.Router()

router.get('/listCounters', async (req, res) => { 
    let countersList = await counters.listCounters() 
    res.send(countersList) 
  }) 

module.exports = router