import express from 'express'; // Import Express
import cors from 'cors'; // Import CORS middleware
import dotenv from 'dotenv'; // Import dotenv for environment variables
import testjson from './routes/test-json.js'; // Import the test-json route

dotenv.config(); // Load environment variables from .env

const app = express(); // Create an Express app
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
const corsOptions = {
    origin: '*', // Allow requests from any origin
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Use the test-json route
app.use('/route101', testjson); // All routes defined in test-json.js will now be prefixed with /route101

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to my simple Express.js app!');
});

// About route
app.get('/about', (req, res) => {
    res.json({ message: 'This is the about page.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
