const express = require('express')
const db      = require('../model/db')

let router = express.Router()

router.post('/updateCounter', async (req, res) => {
    try {
        const params = req.body

        // console.log("params is:",params)

        db.getCollection('counters')
            .then((counters) => {return counters.findOne({name: params.name})
            .then((result) =>   {return result._id})
            .then((id) =>       {return counters.updateOne({_id: id},{$set:{"value":params.value}})})})
        // .then(() => {
        //     db.close()
        // })
        
        res.send("Hocus Pocus we did an update")
    }
    catch (error) {
        console.log(error)
        res.status(404).send("bad stuff******************\n")
    }
})

module.exports = router
