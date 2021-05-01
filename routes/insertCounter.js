const express = require('express')
const counters   = require('../model/countersInMongo')    

let router = express.Router()

router.post('/insertCounter', async (req, res) => {
    const params = req.body
    counters.createCounter(params.name,params.value)  
    res.send("Hocus Pocus we inserted one")  
})

module.exports = router
