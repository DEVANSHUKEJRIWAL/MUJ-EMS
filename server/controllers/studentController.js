const dotenv = require('dotenv').config()
const Student = require("../models/Student")
const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRET



const studentController = {

    addNewStudent: async (req, res) => {
        try {
            const { regNo, firstName, lastName, email, password, batch } = req.body;
            const newStudent = new Student({
                regNo,
                firstName,
                lastName,
                email,
                password,
                batch
            });
            await newStudent.save();
            if (newStudent) {
                return res.status(201).json({ student: newStudent, msg: "Successfully created new student" });
            }
            return res.status(400).json({ msg: 'Failed to create new student' });
        } catch (e) {
            console.error("Error creating student:", e);
            return res.status(500).json({ msg: 'Server error: Failed to create new student', error: e });
        }
    },

    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find({});
            return res.status(200).json({ students, msg: 'Data fetched successfully' });
        } catch (e) {
            console.error("Error fetching students:", e);
            return res.status(500).json({ message: 'Failed to fetch students' });
        }
    },

    getStudentsByBatch: async (req,res) => {
        const { batch } = req.params;
        try {
            const students = await Student.find({ batch });
            return res.status(200).json({ students, msg: 'Data fetched successfully' });
        } catch (e) {
            console.error("Error fetching students by batch:", e);
            return res.status(500).json({ message: 'Failed to fetch students by batch' });
        }
    },

}

module.exports = studentController
