const express = require('express')
const counters = require('../model/countersInMongo')

let router = express.Router()

router.get('/getCounter', async (req, res) => {    
    counterName=req.query.name

    try {
        let counter = await counters.findCounterByName(counterName)
        res.send(counter)    
    }
    catch (error) {
        console.log(error)
        res.status(404).send("counter " + counterName + " not found.\n")
    }
})

module.exports = router