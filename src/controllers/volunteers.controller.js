const ObjectID = require('mongodb').ObjectID;

const {allVolunteersCollection} = require('../utils/dbCollections');

const addNewRegistration = (req, res) => {
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
}


const getVolByEmail = (req, res) => {
    const email = req.params.email.split(':')[1];
    console.log(email);

    allVolunteersCollection.find({email})
        .toArray((err, docs) => {
            res.send(docs);
            console.log();
            console.log(docs);
        })
}


const deleteVol = (req, res) => {
    console.log(req.params);
    allVolunteersCollection.deleteOne({
        _id: ObjectID(req.params.id)
    }).then(response => {
        console.log(response);
        res.send(true);
    })
}


module.exports = {
    addNewRegistration,
    getVolByEmail,
    deleteVol
}