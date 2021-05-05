const express = require('express')
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require('react-dom')
const counters = require('../model/countersInMongo')

let router = express.Router()

router.get('/getCounter', async (req, res) => {    
    let counterName=req.query.name
console.log('1')
    try {
        let counter = await counters.findCounterByName(counterName)
        
        if (counter===null){
            await counters.createCounter(counterName,0)  
            counter = await counters.findCounterByName(counterName)
        }        
        res.send(counter)     
    }
    catch (error) {  
        console.log(error)
        res.status(404).send("counter " + counterName + " not found.\n")
    }
})

module.exports = router