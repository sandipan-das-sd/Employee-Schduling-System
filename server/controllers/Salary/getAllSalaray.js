const SalaryModel = require('../../ConnectDB/models/AddSalaryModel');

const getAllSalaries = async (req, res) => {
    try {
        const salaries = await SalaryModel.find();

        res.json({
            message: 'All salaries retrieved successfully',
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

module.exports = getAllSalaries;
