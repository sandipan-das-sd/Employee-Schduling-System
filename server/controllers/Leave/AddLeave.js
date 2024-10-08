const LeaveModel = require('../../ConnectDB/models/AddLeave');
const StaffModel = require('../../ConnectDB/models/AddStaffSchema');

const addLeave = async (req, res) => {
    const leaveuserid = req.params.id;
    
    if (!leaveuserid) {
        return res.json({
            message: 'User ID not provided',
            error: true,
        });
    }

    try {
        // Check if the staff user exists
        const leaveuser = await StaffModel.findById(leaveuserid);

        if (!leaveuser) {
            return res.json({
                message: 'User not found',
                error: true,
            });
        }

        const { employeeId, reason, description, fromdate, todate, documentproof } = req.body;

        // Validate required fields
        if (!employeeId || !reason || !description || !fromdate || !todate) {
            return res.status(400).json({
                message: 'Please provide all required fields',
                error: true,
            });
        }

        // Create a new leave request document
        const newLeaveRequest = new LeaveModel({
            employeeId,
            reason,
            description,
            fromdate,
            todate,
            documentproof: documentproof || ""
        });

        // Save the leave request to the database
        await newLeaveRequest.save();

        return res.json({
            message: 'Leave request created successfully',
            error: false,
            leave: newLeaveRequest
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
            error: true,
        });
    }
};

module.exports = addLeave;
