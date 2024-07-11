const ProgrammeElective = require("../models/ProgrammeElective")
const OpenElective = require("../models/OpenElective");

const programmeElectiveController = {

    addNewProgrammeElective: async (req, res) => {
        try {
            console.log(req.body)
            const {courseCode, name, description, batch, departmentName} = req.body
            const newProgrammeElective = new ProgrammeElective({courseCode, name, description, batch, departmentName})
            await newProgrammeElective.save()
            return res.status(201).json({newProgrammeElective, msg: "Successfully added new programme elective"})
        } catch (e) {
            return res.status(400).json({msg: "Failed to add new programme elective", error: e})
        }
    },

    getAllProgrammeElectives: async (req, res) => {
        try {
            const programmeElectives = await ProgrammeElective.find({})
            if (programmeElectives) {
                return res.status(200).json({openElectives: programmeElectives, msg: "Open electives successfully fetched"})
            }
            return res.status(404).json({msg: "Failed to fetch open electives"})
        } catch (e) {
            console.error("Error fetching open electives:", e);
            return res.status(500).json({ msg: 'Server error: Failed to fetch open electives',error: e });
        }
    },

    getProgrammeElectivesByBatch: async (req, res) => {
        try {
            const {batch} = req.params
            const programmeElectives = await ProgrammeElective.find({batch: batch})
            if (programmeElectives) {
                return res.status(200).json({openElectives: programmeElectives, msg: "Programme electives successfully fetched"})
            }
            return res.status(404).json({msg: "Failed to fetch programme electives"})
        } catch (e) {
            console.error("Error fetching programme electives:", e);
            return res.status(500).json({ msg: 'Server error: Failed to fetch programme electives', error: e });        }
    }
}

module.exports = programmeElectiveController