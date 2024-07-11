const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OpenElectiveAllotmentsSchema = new Schema({
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

}, {collection: "open_elective_allotments"})

const OpenElectiveAllotment = mongoose.model('OpenElectiveAllotment', OpenElectiveAllotmentsSchema)

module.exports = OpenElectiveAllotment
