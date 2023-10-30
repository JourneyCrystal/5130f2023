const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // Use body-parser middleware to parse JSON

// Create the "user_data" directory if it doesn't exist
const userDirectory = 'user_data';
if (!fs.existsSync(userDirectory)) {
    fs.mkdirSync(userDirectory);
}

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;

    // Generate a unique filename for the JSON data
    const filename = `${Date.now()}_userData.json`;
    const filePath = path.join(userDirectory, filename);

    // Save the JSON data to a file
    fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to save JSON data.');
        } else {
            res.status(200).send('JSON data saved successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
