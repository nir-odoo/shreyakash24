const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // For password hashing
const mongoose = require('mongoose');
const app = express();
const PORT = 5050;

// CORS configuration
app.use(cors({
    origin: '*', 
    credentials: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/eLearningDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// User Schema & Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


// Register Route
app.post('/register', async (req, res) => {
    console.log('Request received at /register:', req.body); // Debugging line
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        console.error("Error in /register:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful!" });
    } catch (err) {
        console.error("Error in /login:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete Account Route
app.delete('/delete-account', async (req, res) => {
    const { username } = req.body;

    try {
        const deletedUser = await User.findOneAndDelete({ username });
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User account deleted successfully' });
    } catch (err) {
        console.error("Error in /delete-account:", err);
        res.status(500).json({ error: 'Server error' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
