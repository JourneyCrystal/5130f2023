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
        isNewData: true, // Add this flag to mark the data as new
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

app.get('/confirmation', (req, res) => {
    const { gamePlatform, chessLevel } = req.query; // Get criteria from query parameters

    // Query data from the database based on criteria
    db.find({ gamePlatform, chessLevel, isNewData: { $ne: true }  }, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error occurred while fetching data.');
        } else {
            // Sort data by age gap (ascending order)
            data.sort((a, b) => Math.abs(a.kidAge - b.kidAge));

            res.render('confirmation', { data }); // Render the confirmation page with filtered and sorted data

            const confirmedDataId = req.query.confirmedDataId;
            // After user confirms data, update the flag to mark it as not new
            db.update({ _id: confirmedDataId }, { $set: { isNewData: false } }, {}, (err, numReplaced) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Updated ${numReplaced} document(s)`);
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('ChessKid Connect is running on http://localhost:3000');
});
