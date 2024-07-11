const mongoose = require('mongoose')
const Schema = mongoose.Schema

const programmeElectiveSchema = new Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
}, {collection: "programme_electives"})

const ProgrammeElective = mongoose.model('ProgrammeElective', programmeElectiveSchema)

module.exports = ProgrammeElective