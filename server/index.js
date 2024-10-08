const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./ConnectDB/db');
const router = require('./routes/routes');
const PORT = process.env.PORT || 5800;
const fileUpload = require('express-fileupload');

app.use(fileUpload());

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

dotenv.config();

// Update CORS configuration
app.use(cors({
    origin: "http://localhost:3000", // explicitly allow your client origin
    methods: "PUT,PATCH,DELETE,GET,POST",
    credentials: true // allow credentials to be sent
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        message: "Congratulations, the server is running"
    });
});

// API Endpoints
app.use('/api/v1', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
}).catch(err => {
    console.log("Error connecting with the Database", err.message);
});
