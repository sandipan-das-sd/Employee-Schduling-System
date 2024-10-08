const StaffModel = require('../../ConnectDB/models/AddStaffSchema');

const editStaff = async (req, res) => {
  const staffId = req.params.id;

  try {
    const staff = await StaffModel.findById(staffId);

    if (!staff) {
      return res.status(404).json({
        message: "Staff Not Found",
        error:true,
      });
    }

    const {
      fullname,
      department,
      gender,
      email,
      mobile,
      photo,
      dob,
      doj,
      city,
      address,
      state,
      country
    } = req.body;

    const updatedData = {
      fullname,
      department,
      gender,
      email,
      mobile,
      photo,
      dob,
      doj,
      city,
      address,
      state,
      country
    };

    const updatedStaff = await StaffModel.findByIdAndUpdate(
      staffId, // The ID of the staff to update
      updatedData, // The data to update
      { new: true, runValidators: true } // Options: return the updated document and run validation
    );

    // Determine which fields were updated
    const updatedFields = [];
    for (const key in updatedData) {
      if (updatedData[key] && updatedData[key] !== staff[key]) {
        updatedFields.push(key);
      }
    }

    const message = `Updated fields: ${updatedFields.join(', ')}`;

    res.status(200).json({
      message: `Staff Details Updated Successfully. ${message}`,
      data: updatedStaff,
      success:true
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating staff',
      error: error.message,
    });
  }
};

module.exports = editStaff;
