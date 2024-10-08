const Department = require('../../ConnectDB/models/AddDepartment');

const editDept = async (req, res) => {
  const deptId = req.params.id;
  const { deptname, hod, description, location, createdAt } = req.body;

  if (!deptId) {
    return res.status(400).json({
      message: 'Dept ID not found'
    });
  }

  try {
    const updatedDept = await Department.findByIdAndUpdate(
      deptId, // The ID of the department to update
      { deptname, hod, description, location, createdAt },
      { new: true, runValidators: true } 
    );

    if (!updatedDept) {
      return res.status(404).json({
        message: 'Department not found',
        error:true
      });
    }

    res.status(200).json({
        message:"Deparment Updated Succesfully",
        data:updatedDept,
        success:true
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating department',
      error: error.message
    });
  }
};

module.exports = editDept;
