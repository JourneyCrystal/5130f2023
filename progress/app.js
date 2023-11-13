const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const path = require('path');

const app = express();
app.use(express.json()); // This line is for parsing JSON
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create a NeDB database for user data
const db = new Datastore({ filename: 'customer_data.db', autoload: true });

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Define a route for submitting data from the wizard
app.post('/submit-data', (req, res) => {
    console.log(req.body); // This will log the incoming request body to the console
    const userData = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location,
        age: req.body.age,
        chessLevel: req.body.chessLevel,
        contactMethod: req.body.contactMethod,
        gamePlatform: req.body.gamePlatform,
        gameStyle: req.body.gameStyle,
    };

    // Save user data to the database
    db.insert(userData, (err, newDoc) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error occurred while saving data.' });
        } else {
            console.log('Data added to database:', newDoc);
            res.json(newDoc);
        }
    });
});

app.get('/all-data', (req, res) => {
    db.find({}, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error occurred while fetching data.');
        } else {
            res.render('all-data', { data }); // Render the HTML file with data
        }
    });
});

// Route for the confirmation page
app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/confirmation.html'));
});

app.listen(3000, () => {
    console.log('ChessKid Connect is running on http://localhost:3000');
});
