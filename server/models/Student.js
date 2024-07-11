const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, secret_key, {expiresIn: '3d'})
}

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    regNo: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    batch: {
        type: Number,
        required: true
    }
}, { collection: 'students' });

studentSchema.statics.signup = async function(email, password, regNo, firstName, lastName, batch) {

    if(!email || !password) {
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if(!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }
    const exists = await this.findOne({email})
    if (exists) {
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    const hash = await bcrypt.hash(password, salt)

    return await this.create({email: email, password: hash, regNo, firstName, lastName, batch})
}

//static login method
studentSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({email})
    if(!user) {
        throw Error("Email not registered. Please sign up")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Incorrect password")
    }
    return user
}

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
