let MongoClient = require('mongodb').MongoClient;


let uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.opwzi.mongodb.net:27017,cluster0-shard-00-01.opwzi.mongodb.net:27017,cluster0-shard-00-02.opwzi.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-t6aucd-shard-0&authSource=admin&retryWrites=true&w=majority`;

let client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {client}