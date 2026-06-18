// backend/server.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Loads your secret .env variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Imports Mongoose

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB Cloud Database!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- DATABASE SCHEMA ---
// This tells MongoDB exactly what a Document Request looks like
const requestSchema = new mongoose.Schema({
    applicant: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "NIC", "Passport"
    status: { type: String, default: "Pending Approval" }
}, { timestamps: true });

// Create the Model
const DocumentRequest = mongoose.model('DocumentRequest', requestSchema);

// --- API ROUTES ---

// 1. CITIZEN: Submit a new document request
app.post('/api/citizen/request', async (req, res) => {
    try {
        const { applicant, type } = req.body;
        const newRequest = new DocumentRequest({ applicant, type });
        await newRequest.save(); // Saves permanently to MongoDB Atlas
        res.status(201).json({ message: "Request submitted successfully", request: newRequest });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit request" });
    }
});

// 2. ADMIN: Get all document requests
app.get('/api/admin/requests', async (req, res) => {
    try {
        const requests = await DocumentRequest.find().sort({ createdAt: -1 }); // Newest first
        
        // Format the data so our Next.js frontend can read the MongoDB ID
        const formattedRequests = requests.map(req => ({
            id: req._id,
            applicant: req.applicant,
            type: req.type,
            status: req.status
        }));
        
        res.json(formattedRequests);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch requests" });
    }
});

// 3. ADMIN: Approve or Reject a request
app.put('/api/admin/requests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        // Find the document by its unique ID and update its status
        const updatedRequest = await DocumentRequest.findByIdAndUpdate(
            id, 
            { status: status }, 
            { new: true }
        );
        
        if (!updatedRequest) {
            return res.status(404).json({ message: "Request not found" });
        }
        
        res.json({ message: "Status updated successfully", request: updatedRequest });
    } catch (error) {
        res.status(500).json({ error: "Failed to update status" });
    }
});

// --- AUTHENTICATION ROUTES ---

// 1. REGISTER: Create a new account
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash (encrypt) the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the new user
        const newUser = new User({ email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error during registration" });
    }
});

// 2. LOGIN: Verify credentials and grant a token
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        // Create the JWT Token (The digital ID card)
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        res.json({ token, role: user.role, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error during login" });
    }
});

// --- USER SCHEMA (For Authentication) ---
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['citizen', 'admin'], default: 'citizen' }
});

const User = mongoose.model('User', userSchema);

app.listen(PORT, () => {
    console.log(`Backend server running live on http://localhost:${PORT}`);
});