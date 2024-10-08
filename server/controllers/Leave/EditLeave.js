const LeaveModel = require('../../ConnectDB/models/AddLeave');

const editLeave = async (req, res) => {
    const leaveId = req.params.id;

    if (!leaveId) {
        return res.json({
            message: 'Leave ID not provided',
            error: true,
        });
    }

    try {
        // Find the leave request by ID
        let leaveRequest = await LeaveModel.findById(leaveId);

        if (!leaveRequest) {
            return res.status(404).json({
                message: 'Leave request not found',
                error: true,
            });
        }

        // Update only the fields that are provided and accumulate update messages
        const updatedFields = {};
        const updateMessages = [];
        const { employeeId, reason, description, fromdate, todate, documentproof } = req.body;

        if (employeeId) {
            updatedFields.employeeId = employeeId;
            updateMessages.push('Employee ID updated successfully');
        }
        if (reason) {
            updatedFields.reason = reason;
            updateMessages.push('Reason updated successfully');
        }
        if (description) {
            updatedFields.description = description;
            updateMessages.push('Description updated successfully');
        }
        if (fromdate) {
            updatedFields.fromdate = fromdate;
            updateMessages.push('From date updated successfully');
        }
        if (todate) {
            updatedFields.todate = todate;
            updateMessages.push('To date updated successfully');
        }
        if (documentproof) {
            updatedFields.documentproof = documentproof;
            updateMessages.push('Document proof updated successfully');
        }

        // Perform the update
        leaveRequest = await LeaveModel.findByIdAndUpdate(
            leaveId,
            { $set: updatedFields },
            { new: true }
        );

        return res.json({
            message: 'Leave request updated successfully',
            updateMessages: updateMessages,
            error: false,
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

module.exports = editLeave;
