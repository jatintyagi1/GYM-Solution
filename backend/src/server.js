
const express = require('express');


const app = express();

const PORT = 5000;


// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your backend is set up.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});