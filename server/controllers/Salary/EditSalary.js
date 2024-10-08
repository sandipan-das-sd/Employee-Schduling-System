const SalaryModel = require('../../ConnectDB/models/AddSalaryModel');

const editSalary = async (req, res) => {
    const salaryId = req.params.id;
    
    try {
        const updatedSalary = await SalaryModel.findByIdAndUpdate(
            salaryId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedSalary) {
            return res.status(404).json({
                message: 'Salary not found',
                error: true
            });
        }

        res.json({
            message: 'Salary updated successfully',
            salary: updatedSalary
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = editSalary;
