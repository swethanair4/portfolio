const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Form Submitted:', {
        name,
        email,
        message
    });

    // Respond to client
    res.json({ success: true, message: "Form submitted successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
