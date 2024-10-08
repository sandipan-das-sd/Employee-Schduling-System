const LeaveModel = require('../../ConnectDB/models/AddLeave');

const approveLeave = async (req, res) => {
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
                status: 'Approved',
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
            message: 'Leave request approved successfully',
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

module.exports = approveLeave;



// {
//     "message": "Leave Record Found For this Particular Employee ",
//     "data": [
//       {
//         "status": "Pending",
//         "_id": "667d7805b1eadf93f315f77b",
//         "employeeId": "667d605fe472f13047a00717",
//         "reason": "Medical",
//         "description": "Medical leave for surgery",
//         "fromdate": "2023-06-01",
//         "todate": "2023-06-10",
//         "documentproof": "medical_certificate.jpg",
//         "__v": 0
//       },
//       {
//         "status": "Pending",
//         "_id": "667e2bf208d207c366dbc127",
//         "employeeId": "667d605fe472f13047a00717",
//         "reason": "Medical",
//         "description": "Medical leave for surgery",
//         "fromdate": "2023-06-01",
//         "todate": "2023-06-10",
//         "documentproof": "medical_certificate.jpg",
//         "__v": 0
//       },
//       {
//         "status": "Pending",
//         "_id": "667e2bf808d207c366dbc12a",
//         "employeeId": "667d605fe472f13047a00717",
//         "reason": "Medicahhhl",
//         "description": "Medical leave for surgery",
//         "fromdate": "2023-06-01",
//         "todate": "2023-06-10",
//         "documentproof": "medical_certificate.jpg",
//         "__v": 0
//       },
//       {
//         "status": "Pending",
//         "_id": "667e2c0008d207c366dbc12d",
//         "employeeId": "667d605fe472f13047a00717",
//         "reason": "Medicahhhl",
//         "description": "Medical leave r surgery",
//         "fromdate": "2023-06-01",
//         "todate": "2023-06-10",
//         "documentproof": "medical_certificate.jpg",
//         "__v": 0
//       }
//     ]
//   }