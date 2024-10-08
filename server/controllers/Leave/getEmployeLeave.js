const LeaveModel = require('../../ConnectDB/models/AddLeave');

const getLeave = async (req, res) => {
    const employeeId = req.params.id;

    if (!employeeId) {
        return res.status(400).json({
            message: "Employee ID is required"
        });
    }

    try {
        const leaveData = await LeaveModel.find({ employeeId });

        if (!leaveData || leaveData.length === 0) {
            return res.status(404).json({
                message: "No leave records found for this employee"
            });
        }

        return res.status(200).json({
            message:"Leave Record Found For this Particular Employee ",
            data:leaveData
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while retrieving leave data",
            error: error.message
        });
    }
};

module.exports = getLeave;
