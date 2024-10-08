const UserModel = require('../ConnectDB/models/RegistrationSchema');
const cloudinary = require('cloudinary').v2;

// List all admins
const listAdmins = async (req, res) => {
    try {
        // Fetch all users with the 'admin' role
        const admins = await UserModel.find({ role: 'admin' });
        return res.status(200).json({
            admins,
            success: true
        });
    } catch (error) {
        console.error("Error listing admins:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: true
        });
    }
};

// Update admin details
const updateAdmin = async (req, res) => {
    const { email, name } = req.body;
    const { adminId } = req.params; // Expecting adminId in the URL parameters

    if (!email || !name) {
        return res.status(400).json({
            message: "Email and name are required",
            error: true
        });
    }

    try {
        // Find the admin to be updated
        const admin = await UserModel.findById(adminId);
        if (!admin || admin.role !== 'admin') {
            return res.status(404).json({
                message: "Admin not found",
                error: true
            });
        }

        // Handle file upload if provided
        if (req.files && req.files.photo) {
            const photo = req.files.photo;

            try {
                // Upload the photo to Cloudinary
                const uploadResult = await cloudinary.uploader.upload(photo.tempFilePath);
                // Update the admin's photo URL
                admin.photoUrl = uploadResult.secure_url;
            } catch (uploadError) {
                console.error("Error uploading photo to Cloudinary:", uploadError);
                return res.status(500).json({
                    message: "Error uploading photo",
                    error: true
                });
            }
        }

        // Update admin details
        admin.name = name; // Update name if provided
        admin.email = email; // Update email if provided
        await admin.save();

        return res.status(200).json({
            message: "Admin details updated successfully",
            success: true
        });
    } catch (error) {
        console.error("Error updating admin details:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: true
        });
    }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
    const { adminId } = req.params; // Expecting adminId in the URL parameters

    try {
        // Find the admin to be deleted
        const admin = await UserModel.findById(adminId);
        if (!admin || admin.role !== 'admin') {
            return res.status(404).json({
                message: "Admin not found",
                error: true
            });
        }

        // Delete the admin
        await admin.remove();

        return res.status(200).json({
            message: "Admin deleted successfully",
            success: true
        });
    } catch (error) {
        console.error("Error deleting admin:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: true
        });
    }
};

module.exports = {
    listAdmins,
    updateAdmin,
    deleteAdmin
};
