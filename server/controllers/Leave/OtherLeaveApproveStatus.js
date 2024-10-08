const LeaveModel = require('../../ConnectDB/models/AddLeave');

const otherLeaveStatus = async (req, res) => {
    const leaveId = req.params.id;

    if (!leaveId) {
        return res.json({
            message: 'Leave ID not provided',
            error: true,
        });
    }

    try {
        const { approvalComments } = req.body;

        const leaveRequest = await LeaveModel.findByIdAndUpdate(
            leaveId,
            {
                status: 'Pending',
                approvalComments: approvalComments || ""
            },
            { new: true }
        );

        if (!leaveRequest) {
            return res.status(404).json({
                message: 'Leave request not found',
                error: true,
            });
        }

        // Ensure approvalComments are included in the response
        leaveRequest.approvalComments = approvalComments || "";

        return res.json({
            message: 'Leave status updated to Pending successfully',
            leave: leaveRequest
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
            error: true,
        });
    }
};

module.exports = otherLeaveStatus;
