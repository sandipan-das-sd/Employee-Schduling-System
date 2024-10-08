const AddDepartment = require('../../ConnectDB/models/AddDepartment');

const addDepartment = async (req, res) => {
    const { deptname, description, hod, location, createdAt } = req.body;

    try {
        const checkDepartment = await AddDepartment.findOne({ deptname });

        if (checkDepartment) {
            return res.status(400).json({
                message: "Department already exists! Please add a new department.",
                error:true
            });
        }

        const newDept = new AddDepartment({
            deptname,
            description,
            hod,
            location,
            createdAt: createdAt === "" ? Date.now() : createdAt
        });

        await newDept.save();
        return res.status(201).json({
            message: "Department added successfully",
            data:newDept,
            success:true
        });
    } catch (error) {
        console.log("Error in add department controller")
        console.error("Error in add department controller", error);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = addDepartment;
