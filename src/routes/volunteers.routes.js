const {addNewRegistration, getVolByEmail, deleteVol} = require("../controllers/volunteers.controller")

const volunteerRouter = (app) => {
    app.post('/addNewReg', addNewRegistration)
    app.get('/find/:email', getVolByEmail)
    app.delete('/delete/:id', deleteVol)
}

module.exports = {volunteerRouter}