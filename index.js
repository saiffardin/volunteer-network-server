const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000
const app = express();

app.use(cors());
app.use(bodyParser.json());

// DB name : volunteerNetwork
// user : jm-module-51
// password : kgNXlD1HcdlRqMiz


// -------------------------------------------------------- MongoDB Driver code
let MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let uri = "mongodb://jm-module-51:kgNXlD1HcdlRqMiz@cluster0-shard-00-00.opwzi.mongodb.net:27017,cluster0-shard-00-01.opwzi.mongodb.net:27017,cluster0-shard-00-02.opwzi.mongodb.net:27017/volunteerNetwork?ssl=true&replicaSet=atlas-t6aucd-shard-0&authSource=admin&retryWrites=true&w=majority";

let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

client.connect((err, client) => {
    console.log("DB connected successfully");

    const allActivitiesCollection = client.db("volunteerNetwork").collection("allActivities");
    const allVolunteersCollection = client.db("volunteerNetwork").collection("allVolunteers");

    // load all activity
    app.get('/loadAll', (req, res) => {
        allActivitiesCollection.find({})
            .toArray((err, docs) => {
                // console.log(docs);
                res.send(docs);
            })

    })


    //insert new registration
    app.post('/addNewReg', (req, res) => {
        const newReg = req.body;
        console.log();
        console.log("this is 'addNewReg' API");
        console.log(newReg);

        allVolunteersCollection.insertOne(newReg)
            .then(result => {
                console.log();
                console.log("Mongo DB API - responded");
                console.log(result);
                res.send(result.insertedCount > 0);
            })

        console.log();

    })



    // find by email
    app.get('/find/:email', (req, res) => {

        const email = req.params.email.split(':')[1];
        console.log(email);

        allVolunteersCollection.find({ email })
            .toArray((err, docs) => {
                res.send(docs);
                console.log();
                console.log(docs);
            })
    })


    // delete by ID
    app.delete('/delete/:id', (req, res) => {
        console.log(req.params);
        allVolunteersCollection.deleteOne({
            _id: ObjectID(req.params.id)
        }).then(response => {
            console.log(response);
            res.send(true);
        })
    })


});

// -------------------------------------------------------- MongoDB Driver code






// --------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
