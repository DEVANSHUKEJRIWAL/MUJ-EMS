const OpenElectiveAllotment = require('../models/OpenElectiveAllotment')
const OpenElective = require("../models/OpenElective");
const ProgrammeElective = require("../models/ProgrammeElective");


const openElectiveExists = async (courseCode) => {
    try {
        const elective = await OpenElective.findOne({ courseCode: courseCode });
        if (elective) {
            return true
        }
        return false
    } catch (e) {
        console.error("error", e)
    }
}

const openElectiveAllotmentController = {

    getAllAllotmentsOfStudent: async (req, res) => {
        try {
            console.log("hello")
            const {regNo} = req.user
            const allotments = await OpenElectiveAllotment.find({regNo: regNo}).sort({semester: 1})
            return res.status(200).json({msg: "successfully fetched all allotments", allotments: allotments})
        } catch (e) {
            console.error("error", e)
            res.status(400).json({msg: "failed to fetch the allotments", error: e})
        }
    },

    addNewAllotment: async (req, res) => {
        try {
            const {regNo} = req.user
            const {courseCode, semester} = req.body
            const currentAllotment = await OpenElectiveAllotment.findOne({regNo: regNo, semester: semester})
            if (currentAllotment) {
                return res.status(409).json({msg: "User has already been allotted an open elective for the given semester. Try using the patch method"})
            }
            const openElectiveBoolean = await openElectiveExists(courseCode)
            if (!openElectiveBoolean) {
                return res.status(404).json({msg: "Course code invalid"})
            }
            const newAllotment = new OpenElectiveAllotment({courseCode, semester, regNo})
            await newAllotment.save()
            return res.status(201).json({msg: "new allotment successfully added"})
        } catch (e) {
            console.error("error", e)
            return res.status(400).json({msg: 'failed to add new allotment', error: e})
        }
    },

    updateAllotment: async (req, res) => {
        try {
            const { regNo } = req.user;
            const { courseCode, semester } = req.body;
            const openElectiveBoolean = await openElectiveExists(courseCode)
            if (!openElectiveBoolean) {
                return res.status(404).json({msg: "Course code invalid"})
            }
            const updatedAllotment = await OpenElectiveAllotment.findOneAndUpdate(
                { regNo: regNo, semester: semester },
                { courseCode: courseCode },
                { new: true }
            );
            console.log(updatedAllotment)

            if (!updatedAllotment) {
                return res.status(404).json({ msg: 'Allotment not found' });
            }

            return res.json({msg: "allotment successfully updated", updatedAllotment});
        } catch (e) {
            console.error('Failed to update allotment:', e);
            return res.status(500).json({ msg: 'Failed to update the allotment', error: e.message });
        }
    }
}

module.exports = openElectiveAllotmentController