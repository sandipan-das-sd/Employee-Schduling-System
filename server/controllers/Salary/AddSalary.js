const SalaryModel = require('../../ConnectDB/models/AddSalaryModel');

const addSalary = async (req, res) => {
    const {
        employeeId,
        basic,
        hra,
        conveyance,
        medical,
        specialAllowance,
        taxDeductions,
        providentFund,
        professionalTax,
        netSalary
    } = req.body;

    try {
        const newSalary = new SalaryModel({
            employeeId,
            basic,
            hra,
            conveyance,
            medical,
            specialAllowance,
            taxDeductions,
            providentFund,
            professionalTax,
            netSalary
        });

        await newSalary.save();

        res.status(201).json({
            message: 'Salary added successfully',
            salary: newSalary,
            success:true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = addSalary;
