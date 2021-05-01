const express = require('express')
const db      = require('../model/db')  

let router = express.Router()

router.delete('/deleteCounter/:name', async (req, res) => {
    try {
        const params = req.params
        console.log("params is: ",params)

        db.getCollection('counters')
            .then((counters) => {return counters.findOne({name:params.name})
            .then((result) =>   {return result._id})
            .then((id) =>       {return counters.deleteOne({_id: id})})})
        // .then(() => {
        //     db.close()
        // })
        
        res.send("Hocus Pocus we deleted one")
    }
    catch (error) {
        console.log(error)
        res.status(404).send("bad stuff******************\n")
    }
})

module.exports = router