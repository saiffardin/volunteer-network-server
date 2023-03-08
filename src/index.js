const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000
const {client} = require('./utils/dbClient');

client.connect((err, client) => {
    console.log("DB connected successfully");

    const {activitiesRouter} = require('./routes/activities.routes');
    const {volunteerRouter} = require('./routes/volunteers.routes');
    
    activitiesRouter(app)
    volunteerRouter(app)
});

app.listen(process.env.PORT || port);


// DB name : volunteerNetwork
// user : jm-module-51
// password : kgNXlD1HcdlRqMiz