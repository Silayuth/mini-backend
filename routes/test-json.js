import express from 'express';

const router = express.Router();

// GET route for /route101
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to Route 101! This is a GET request.',
    });
});

// POST route for /route101
router.post('/', (req, res) => {
    const { name, message } = req.body; // Extract data from the request body

    // Validation: Check if name and message are provided
    if (!name || !message) {
        return res.status(400).json({
            success: false,
            message: 'Name and message are required!',
        });
    }

    // Respond with success and echo back the data
    res.status(200).json({
        success: true,
        message: 'POST request to Route 101 received successfully!',
        data: {
            name,
            message,
        },
    });
});

export default router; // Export the router
