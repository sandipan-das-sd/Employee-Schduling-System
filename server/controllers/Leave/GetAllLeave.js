const LeaveModel = require('../../ConnectDB/models/AddLeave');

const getAllLeaves = async (req, res) => {
    try {
        const leaveData = await LeaveModel.find();

        if (!leaveData || leaveData.length === 0) {
            return res.status(404).json({
                message: "No leave records found"
            });
        }

        return res.status(200).json({
            message: "Leave List Record Found",
            data: leaveData
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving leave data",
            error: error.message
        });
    }
};

module.exports = getAllLeaves;
