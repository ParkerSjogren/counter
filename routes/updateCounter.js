const express = require('express')
const db      = require('../model/db')
const counters   = require('../model/countersInMongo')    

let router = express.Router()

router.post('/updateCounter', async (req, res) => {
    try {
        //const params = req.body

        //console.log("req.body is: ",req.body)

        db.getCollection('counters')
            .then((counters) => {return counters.findOne({name:'default'})
            .then((result) =>   {return result._id})
            .then((id) =>       {return counters.deleteOne({_id: id})})})
        // .then(() => {
        //     db.close()
        // })
        
        counters.createCounter('default',0)    
        res.send("Hocus Pocus")
    }
    catch (error) {
        console.log(error)
        res.status(404).send("bad stuff******************\n")
    }
})

module.exports = router
