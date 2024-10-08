const AddDepartment = require('../../ConnectDB/models/AddDepartment');

const getDepartment = async (req, res) => {
    const deptId = req.params.id;

    try {
        if (deptId) {
          
            const dept = await AddDepartment.findById(deptId);
            if (!dept) {
                return res.status(404).json({ error: 'Department not found' });
            }   
            return res.json({
                message:"This Department Found",
                data:dept,
                success:true
            });
        } else {
            // Get all departments
            const allDepts = await AddDepartment.find();
            return res.json({
                message:"All Departments Found",
                data:allDepts,
                success:true
            });
        }
    } catch (error) {
        console.log("Error in get department Controller",error)
        console.error('Error fetching departments', error);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = getDepartment;
