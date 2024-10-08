const LeaveModel = require('../../ConnectDB/models/AddLeave');

const rejectLeave = async (req, res) => {
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
                status: 'Rejected',
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

        return res.json({
            message: 'Leave request rejected successfully',
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

module.exports = rejectLeave;
