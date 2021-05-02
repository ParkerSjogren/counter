const db = require('./db')

async function getCountersCollection() {
    return db.getCollection("counters")
}

async function createCounter(name, value) {

    return db.getCollection("counters").then((counters) => {
        return counters.insertOne({name,value})    
        .then((insertResult) => {
            console.log("inserted a counter!")
        })    
    })
    // .then(() => {
    //     db.close()
    // })
}

async function findCounterByName(counterName) {
    return db.getCollection("counters").then((counters) => {
        return counters.findOne({name: counterName})
    })
}

async function listCounters() {
    let countersCollection = await getCountersCollection()
    let cursor = countersCollection.find({})
    return cursor.toArray()
}

module.exports = {
    createCounter,
    findCounterByName,
    listCounters
}