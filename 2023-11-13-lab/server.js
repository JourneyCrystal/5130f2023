// server.js
const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const path = require('path');

const app = express();
const db = new Datastore({ filename: 'database.db', autoload: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Regex for email and password validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Standard password strength regex (minimum 8 characters, at least one letter and one number)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    return res.status(400).send('Invalid email or password format');
  }

  db.insert({ email, password }, (err, newUser) => {
    if (err) {
      return res.status(500).send('Error registering new user');
    }
    res.status(200).send('User registered successfully');
  });
});

// Serve the login HTML file
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
  });
  
  // Login logic
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    db.findOne({ email, password }, (err, user) => {
      if (err || !user) {
        return res.status(400).send('Invalid credentials');
      }
      res.redirect('/dashboard');
    });
  });

// Serve the dashboard HTML file
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
