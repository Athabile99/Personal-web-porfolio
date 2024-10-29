const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com'); // Make sure to install the EmailJS library
require('dotenv').config(); // To use environment variables

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Use EmailJS to send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    }, process.env.EMAILJS_USER_ID) // Use your User ID stored in the environment variable
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        res.json({ success: true });
    }, (error) => {
        console.error('FAILED...', error);
        res.json({ success: false });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
