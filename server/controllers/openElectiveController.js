const OpenElective = require("../models/OpenElective")

const openElectiveController = {

    addNewOpenElective: async (req, res) => {
        try {
            const {courseCode, name, description, batch, type} = req.body
            const newOpenElective = new OpenElective({courseCode, name, description, batch, type})
            await newOpenElective.save()
            return res.status(201).json({newOpenElective, msg: "Successfully added new open elective"})
        } catch (e) {
            console.error("Error creating new open elective:", e);
            return res.status(400).json({msg: "Failed to add new open elective", error: e})
        }
    },

    getAllOpenElectives: async (req, res) => {
        try {
            const openElectives = await OpenElective.find({})
            console.log(req.user.regNo)
            if (openElectives) {
                return res.status(200).json({openElectives, msg: "Open electives successfully fetched"})
            }
            return res.status(404).json({msg: "Failed to fetch open electives"})
        } catch (e) {
            console.error("Error fetching open electives:", e);
            return res.status(500).json({ msg: 'Server error: Failed to fetch open electives' });
        }
    },

    getOpenElectivesByBatch: async (req, res) => {
        try {
            const {batch} = req.params
            const openElectives = await OpenElective.find({batch: batch})
            if (openElectives) {
                return res.status(200).json({openElectives: openElectives, msg: "Open electives successfully fetched"})
            }
            return res.status(404).json({msg: "Failed to fetch open electives"})
        } catch (e) {
            console.error("Error fetching open electives:", e);
            return res.status(500).json({ msg: 'Server error: Failed to fetch open electives' });        }
    },

}

module.exports = openElectiveController