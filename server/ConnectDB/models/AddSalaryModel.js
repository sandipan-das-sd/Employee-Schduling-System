const mongoose = require('mongoose');

const AddSalaryModel = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staffs', 
        required: [true, "provide Employee ID"]
    },
    basic: {
        type: Number,
        required: [true, "provide Basic Salary"]
    },
    hra: {
        type: Number,
        required: [true, "provide HRA (House Rent Allowance)"]
    },
    conveyance: {
        type: Number,
        required: [true, "provide Conveyance Allowance"]
    },
    medical: {
        type: Number,
        required: [true, "provide Medical Allowance"]
    },
    specialAllowance: {
        type: Number,
        required: [true, "provide Special Allowance"]
    },
    taxDeductions: {
        type: Number,
        required: [true, "provide Tax Deductions"]
    },
    providentFund: {
        type: Number,
        required: [true, "provide Provident Fund"]
    },
    professionalTax: {
        type: Number,
        required: [true, "provide Professional Tax"]
    },
    netSalary: {
        type: Number,
        required: [true, "provide Net Salary"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AddSalary', AddSalaryModel);
