const {client} = require('./dbClient');

const allActivitiesCollection = client?.db("volunteerNetwork").collection("allActivities");
const allVolunteersCollection = client?.db("volunteerNetwork").collection("allVolunteers");

module.exports = {
    allActivitiesCollection,
    allVolunteersCollection
}