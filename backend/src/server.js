require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db');
const userRoutes = require("./routes/Auth");
// Creating express App
const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// Connect to Database
connectDB();

// Routes
app.use("/api", userRoutes);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your backend is set up.');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));