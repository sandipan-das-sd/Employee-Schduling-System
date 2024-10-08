const mongoose = require('mongoose');

const AddLeaveModel = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staffs',
        required: [true, "Provide Employee ID"]
    },
    reason: {
        type: String,
        required: [true, "Provide Reason"]
    },
    description: {
        type: String,
        required: [true, "Provide Description"]
    },
    fromdate: {
        type: String,
        required: [true, "Provide From Date"]
    },
    todate: {
        type: String,
        required: [true, "Provide To Date"]
    },
    documentproof: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },

    approvalComments: {
        type: String,
        default: ""
    }
});

const AddLeaveSchema = mongoose.model("Leave", AddLeaveModel);
module.exports = AddLeaveSchema;
