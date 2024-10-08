const AddStaff = require('../../ConnectDB/models/AddStaffSchema');

const addStaff = async (req, res) => {
    const { fullname, department, gender, email, mobile, photo, dob, doj, city, state, country, address } = req.body;
    
    try {
        const checkEmail = await AddStaff.findOne({ email });

        if (checkEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const checkMobile = await AddStaff.findOne({ mobile });

        if (checkMobile) {
            return res.status(400).json({ error: 'Mobile number already exists' });
        }

        const newStaff = new AddStaff({
            fullname,
            department,
            gender,
            email,
            mobile,
            photo,
            dob,
            doj,
            city,
            state,
            country,
            address
        });

        await newStaff.save();
        res.status(201).json({ message: 'Staff added successfully',
            data:newStaff,
            success:true
        });
    } catch (error) {
        console.log("Error in addstaff controller",error)
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = addStaff;
