const SalaryModel = require('../../ConnectDB/models/AddSalaryModel');

const getSalaryByEmployeeId = async (req, res) => {
    const employeeId = req.params.id;
    
    try {
        const salaries = await SalaryModel.find({ employeeId });

        if (salaries.length === 0) {
            return res.status(404).json({
                message: 'No salary records found for this employee',
                error: true
            });
        }

        res.json({
            message: 'Salaries retrieved successfully for employee ID',
            salaries
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = getSalaryByEmployeeId;
