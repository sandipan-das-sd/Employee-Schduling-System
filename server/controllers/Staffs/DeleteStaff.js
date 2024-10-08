const StaffModel = require('../../ConnectDB/models/AddStaffSchema');

const deleteStaff = async (req, res) => {
  const staffId = req.params.id;

  try {
    const deletedStaff = await StaffModel.findByIdAndDelete(staffId);

    if (!deletedStaff) {
      return res.status(404).json({
        message: "Staff Not Found",
        error:true
      });
    }

    res.status(200).json({
      message: "Staff deleted successfully",
      data: deletedStaff,
      succes:true
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting staff',
      error: error.message,
    });
  }
};

module.exports = deleteStaff;
