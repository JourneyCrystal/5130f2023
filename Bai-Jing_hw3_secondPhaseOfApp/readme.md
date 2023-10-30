# ChessKid Connect

## Table of Contents
1. [Introduction](#introduction)
2. [How to Install and Run](#how-to-install-and-run)
3. [Technical Design](#technical-design)
4. [Wizard Steps](#wizard-steps)

## Introduction

ChessKid Connect is a web-based tool that helps parents and young chess enthusiasts find compatible chess partners. This project provides a wizard-based interface to collect and store user information, including preferences and a custom message for potential chess partners.

## How to Install and Run

### Prerequisites
- Node.js installed on your system. If not installed, download and install it from [Node.js official website](https://nodejs.org/).

### Installation
1. Clone the project repository to your local machine

2. Navigate to the project directory:

3. Install the required Node.js modules using npm:
   ```
   npm install
   ```

### Running the Application
1. Start the Node.js server:
   ```
   node server.js
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the ChessKid Connect wizard.

## Technical Design

ChessKid Connect is built with the following components and technologies:

- **Frontend**: HTML, CSS, JavaScript (Vanilla).
- **Backend**: Node.js using Express.js for the server.
- **File Upload**: Multer is used to handle file uploads.
- **Data Storage**: User information is collected and stored in a JSON format.

## Wizard Steps

The ChessKid Connect wizard consists of the following steps, each serving a specific purpose for finding a chess partner:

1. **Personal Information**: Collects the user's first name and last name for personalized introductions to potential chess partners.

2. **Contact Information**: Gathers the user's email and phone number for communication, ensuring easy contact.

3. **Location**: Captures the user's city and state to help match users with local chess partners, promoting face-to-face gameplay.

4. **Kid's Information**: Gathers information about the user's kid, including age and years of playing chess, to find compatible partners.

5. **Preferences**: Asks for the preferred contact method (email, phone, or both) and game preference (online, same-town, or both), helping to filter and match partners more accurately.

6. **Play Style**: Collects information about the user's preferred chess play style (recreational, competitive, or casual) to align users with similar play styles.

7. **Custom Message**: Provides an optional field for the user to enter a custom message for potential chess partners, allowing users to communicate special preferences or interests.

8. **Submit**: The final step where the user can review their information before submitting the form, ensuring accuracy and completeness.

Each step in the wizard is designed to gather specific information to improve the accuracy of matching chess partners, enhance user experience, and promote meaningful connections.
