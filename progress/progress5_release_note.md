# ChessKid Connect - Progress 5


### New Feature: Match Result Database and Developer Portal

#### Overview

#### Recording Match Results

- **Purpose**: The recording of all match results serves as a reference point for evaluating the quality of chess matches facilitated by ChessKid Connect.
- **Benefit to Developers**: Developers can analyze the data to fine-tune matchmaking algorithms, identify patterns in match outcomes, and make data-driven improvements.
- **Benefit to Customers**: Customers can gain confidence in the platform's matchmaking capabilities, knowing that their matches contribute to valuable data for future enhancements.

#### Developer Portal

- **Organizing Debug Pages**: We have reorganized our developer debug pages into a centralized "Developer Portal."
- **Developer Portal**: The Developer Portal provides easy access to essential debug pages for developers and separates them from user-facing pages.
- **Links Moved**: The links to the "All User Data," "All Match Result," and "Send Email to All Users" pages have been relocated to the Developer Portal.

### How It Enhances Development

- **Match Result Database**: The match result database empowers our development team to continuously enhance the quality of matches by leveraging real data and insights.
- **Developer Portal**: The Developer Portal streamlines the debugging process, making it easier for developers to access essential tools and data while keeping user and developer pages separate for clarity.
### How to Set Up and Run the Project Locally with Node.js

  

To set up and run the ChessKid Connect project locally, follow these steps:

  

1.  **Clone the Repository**:

  

```shell

git clone <url>

```

  

2.  **Navigate to the Project Directory**:

  

```shell

cd ChessKid-Connect

```

  

3.  **Install Dependencies**:

  

```shell

npm install

```

  

4.  **Set Up Email Configuration**:

  

- Open `emailConfig.js` and provide your email account details (as described in the Email Sending Module section of this release note).

  

5.  **Start the Application**:

  

```shell

node app.js

```

  

6.  **Access the Application Locally**:

  

Open your web browser and go to `http://localhost:3000` to access ChessKid Connect.
