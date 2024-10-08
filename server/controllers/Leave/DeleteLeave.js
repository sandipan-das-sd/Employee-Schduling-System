const LeaveModel = require('../../ConnectDB/models/AddLeave');

const deleteLeave = async (req, res) => {
    const leaveId = req.params.id;

    if (!leaveId) {
        return res.json({
            message: 'Leave ID not provided',
            error: true,
        });
    }

    try {
        // Find the leave request by ID and delete it
        const deletedLeave = await LeaveModel.findByIdAndDelete(leaveId);

        if (!deletedLeave) {
            return res.status(404).json({
                message: 'Leave request not found',
                error: true,
            });
        }

        return res.json({
            message: 'Leave request deleted successfully',
            error: false,
            leave: deletedLeave
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
            error: true,
        });
    }
};

module.exports = deleteLeave;
