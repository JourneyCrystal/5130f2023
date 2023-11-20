

```markdown
# ChessKid Connect - Release Note

## Progress 3

### Email Sending Module

#### Overview

- **NPM Package**: The ChessKid Connect project utilizes the `nodemailer` npm package for email sending functionality. Nodemailer is a widely-used library for sending emails from Node.js applications.

#### Setting Up Email Account

- To configure the email sending module, you'll need to provide your email account details.
- **Supported Email Services**: The project supports both Gmail and Hotmail accounts for email sending.
  - **Gmail**: If you're using a Gmail account, please ensure that "Less secure apps" is enabled in your Google account settings. Note that using Gmail may require additional security setup.
  - **Hotmail**: Hotmail accounts can be used without any additional security settings.

#### Code Configuration

```javascript
// Email Configuration (emailConfig.js)

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use 'Hotmail' if applicable
    auth: {
        user: 'your_email@gmail.com', // Replace with your email address
        pass: 'your_email_password', // Replace with your email password
    },
});

module.exports = transporter;
```

### Donation Function

#### Overview

- The donation function is a feature added to ChessKid Connect for demonstration purposes.
- When users click the "Donate" button, an alert window pops up to show a thank you message. No actual donation processing is performed.

### How to Install, Set Up Environment, and Run the Project

Follow these steps to install, set up your environment, and run ChessKid Connect:

1. **Clone the Repository**:

   ```shell
   git clone <github_url>
   ```

2. **Navigate to the Project Directory**:



3. **Install Dependencies**:

   ```shell
   npm install
   ```

4. **Set Up Email Configuration**:

   - Open `emailConfig.js` and provide your email account details (as described in the Email Sending Module section).

5. **Start the Application**:

   ```shell
   node app.js
   ```

6. **Access the Application**:

   Open your web browser and go to `http://localhost:3000` to access ChessKid Connect.

