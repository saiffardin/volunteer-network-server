const {loadAllActivities} = require("../controllers/activities.controller");

const activitiesRouter = (app) => {
    app.get('/loadAll', loadAllActivities)
}

module.exports = {activitiesRouter}
