// models/RegistrationSchema.js
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Provide Email"]
    },
    role: {
        type: String,
        default: "User",
    },
    password: {
        type: String,
        required: [true, "Provide Password"]
    },
    age: {
        type: Number,
        
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneVerified: {
        type: Boolean,
        default: false
    },
    emailOtp: {
        type: String
    },
    smsOtp: {
        type: String
    },
    phone:{
    type: String
    },
});

const RegistrationModel = mongoose.model("Registration", RegistrationSchema);
module.exports = RegistrationModel;
