

const crypto = require('crypto'); 
const transporter = require('./nodemailer'); 
const UserModel = require('../ConnectDB/models/RegistrationSchema'); 

// Generate OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// Send email with OTP
const sendEmail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code for Employee Manegment System Acces Registration ',
            text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};


const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = generateOTP();
        const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

        // Find user and update OTP and expiry
        const user = await UserModel.findOne({ email });
        if (user) {
            user.emailOtp = otp;
            user.otpExpiry = otpExpiry;
            await user.save();
        } else {
            // Handle case where user does not exist
            return res.status(400).json({ message: 'User not found', error: true });
        }

        await sendEmail(email, otp);

        return res.status(200).json({ message: 'OTP sent successfully', success: true });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ message: error.message || 'An unexpected error occurred.', error: true });
    }
};


// Verify OTP Endpoint
const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found', error: true });
        }

        // Check if OTP matches and has not expired
        if (user.emailOtp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP', error: true });
        }

        if (Date.now() > user.otpExpiry) {
            return res.status(400).json({ message: 'OTP has expired', error: true });
        }

        // OTP matches and is valid, update user verification status
        user.emailVerified = true;
        user.emailOtp = null; // Clear OTP after successful verification
        user.otpExpiry = null; // Clear OTP expiry after successful verification
        await user.save();

        return res.status(200).json({ message: 'Email verified successfully', success: true });
    } catch (error) {
        console.error('Error in OTP verification:', error);
        return res.status(500).json({ message: error.message || 'An unexpected error occurred.', error: true });
    }
};

module.exports = { sendOtp, verifyOtp,generateOTP ,sendEmail};
