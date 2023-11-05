

```markdown
# ChessKid Connect

ChessKid Connect is a web application that simplifies the process of collecting and storing user information. Users can complete a step-by-step wizard, providing essential details such as their name, contact information (email and phone number), location, child's age, chess level, preferred contact method, game platform (online or local), and game style (recreational or competitive). The collected data is stored in a single-file based database, offering future opportunities for data retrieval and analysis.


## 1. Progress of This Version

This version improves the project by storing user data in a single-file based database instead of a collection of Jason files. This enhancement enables future query capabilities, allowing the website to retrieve and display stored data based on various criteria. 

This version also adds an "/all-data" view route which provides an overview of all data stored, which can be particularly useful during development and data management.

Also, validation handler is added to each required field of wizard, so that user must provide values to required fields.

### 2. How to Set Up the Environment

To set up the project environment and run the application, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone <git-hub-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd <path>
   ```

3. Install the required Node.js packages:

   ```shell
   npm install
   ```

4. Start the application:

   ```shell
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.


### 3. Technologies Used

The ChessKid Connect project is built using the following technologies:

- Node.js: A JavaScript runtime for server-side development.
- Express.js: A web application framework for Node.js.
- HTML and EJS: Used for creating web page templates.
- CSS: Used for styling the web pages.
- NeDB: A JavaScript-based embedded database for storing user data.
- JavaScript: Used for client-side and server-side scripting.
- npm: The package manager for installing and managing project dependencies.
```
