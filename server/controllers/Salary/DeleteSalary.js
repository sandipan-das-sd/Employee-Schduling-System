const SalaryModel = require('../../ConnectDB/models/AddSalaryModel');

const deleteSalary = async (req, res) => {
    const salaryId = req.params.id;
    
    try {
        const deletedSalary = await SalaryModel.findByIdAndDelete(salaryId);

        if (!deletedSalary) {
            return res.status(404).json({
                message: 'Salary not found',
                error: true
            });
        }

        res.json({
            message: 'Salary deleted successfully',
            salary: deletedSalary
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = deleteSalary;
