const mongoose = require('mongoose')
const Schema = mongoose.Schema

const openElectiveSchema = new Schema({
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
    type: {
        type: String,
        required: true
    },
}, {collection: "open_electives"})

const OpenElective = mongoose.model('OpenElective', openElectiveSchema)

module.exports = OpenElective