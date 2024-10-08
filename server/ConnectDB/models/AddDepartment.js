const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
    deptname: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true
    },
    hod: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    //established time
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const AddDepartment = mongoose.model('Department', departmentSchema);

module.exports = AddDepartment;
