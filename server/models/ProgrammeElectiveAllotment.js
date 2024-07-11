const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgrammeElectiveAllotmentsSchema = new Schema({
    courseCode: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    regNo: {
        type: String,
        required: true
    },


}, {collection: "programme_elective_allotments"})

const ProgrammeElectiveAllotment = mongoose.model('ProgrammeElectiveAllotment', ProgrammeElectiveAllotmentsSchema)

module.exports = ProgrammeElectiveAllotment