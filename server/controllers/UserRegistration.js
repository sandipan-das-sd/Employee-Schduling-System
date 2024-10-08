// controllers/userController.js
const bcrypt = require('bcrypt');
const UserModel = require('../ConnectDB/models/RegistrationSchema'); // Adjust the path as needed
const { sendEmail, generateOTP } = require('./otpController');

const UserRegistration = async (req, res) => {
  try {
    const { email, password, confirmPassword, firstName, lastName, role, age } = req.body;

    // Check if the email already exists
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
        error: true,
      });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match.",
        error: true,
      });
    }

    // Check if the role is admin
    if (role === 'admin') {
      return res.status(403).json({
        message: "Admin role is not allowed during registration.",
        error: true,
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Generate OTP and send email
    const otp = generateOTP();
    await sendEmail(email, otp);

    // Create payload with all necessary fields
    const payload = {
      firstName,
      lastName,
      email,
      role,
      password: hashPassword,
      age, // Include age in the payload
      emailOtp: otp,
    };

    // Save new user
    const newUser = new UserModel(payload);
    const newUserSave = await newUser.save();
    console.log(newUserSave);

    return res.status(201).json({
      message: "User registered successfully. Please check your email for OTP verification.",
      success: true,
      data: newUserSave,
    });
  } catch (error) {
    console.error("Error in User Registration:", error);
    return res.status(500).json({
      message: error.message || "An unexpected error occurred.",
      error: true,
    });
  }
};

module.exports = UserRegistration;
