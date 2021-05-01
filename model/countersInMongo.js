const db = require('./db')

async function createCounter(name, value) {

    return db.getCollection("counters").then((counters) => {
        return counters.insertOne({name,value})    
        .then((insertResult) => {
            console.log("inserted a counter!")
        })    
    })
    .then(() => {
        db.close()
    })
}

async function findCounterByName(counterName) {
    return db.getCollection("counters").then((counters) => {
        return counters.findOne({name: counterName})
    })
}

module.exports = {
    createCounter,
    findCounterByName
}