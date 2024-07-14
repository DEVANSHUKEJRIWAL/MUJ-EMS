const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const Student = require("./models/Student")
const studentsRoute = require("./routes/students")
const openElectivesRoute = require("./routes/openElectives")
const programmeElectivesRoute = require("./routes/programmeElectives")
const authenticationRoute = require("./routes/authentication")
const programmeElectiveAllotments = require('./routes/programmeElectiveAllotments')
const openElectiveAllotments = require('./routes/openElectiveAllotments')

dotenv.config();

const app = express();

//Middleware
app.use(express.json())
app.use(morgan('dev'))


//Routes
app.use("/authentication", authenticationRoute)
app.use("/students", studentsRoute)
app.use("/open_electives", openElectivesRoute)
app.use("/programme_electives", programmeElectivesRoute)
app.use("/programme_elective_allotment", programmeElectiveAllotments)
app.use("/open_elective_allotment", openElectiveAllotments)


//MongoDB Credentials
const username = process.env.MDBUSERNAME
const password = encodeURIComponent(process.env.MDBPASSWORD);
const dbName = process.env.MDBNAME
const port = process.env.PORT || 8080

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.edwgiyg.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});