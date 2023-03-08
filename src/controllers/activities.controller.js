const {allActivitiesCollection} = require('../utils/dbCollections');

const loadAllActivities = (req, res) => {
    allActivitiesCollection.find({})
        .toArray((err, docs) => {
            // console.log(docs);
            res.send(docs);
        })
}

module.exports = {
    loadAllActivities,
}