const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail', // Use your email service provider
    auth: {
        user: 'your_email@gmail.com', // Replace with your email address
        pass: 'your_email_password', // Replace with your email password
    },
    pool: true, // Enable connection pooling
    maxConnections: 2, // Limit the number of concurrent connections
});

module.exports = transporter;