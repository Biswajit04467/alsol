
# Express.js Visitor Tracker

This project is a simple web application built with **Node.js** and **MongoDB** that logs visitors to a website. Each time a user visits the site, their IP address and browser information are recorded in a MongoDB database. Additionally, the total visitor count is fetched and displayed on the website.

## Features

- Logs user visits with IP address and browser information.
- Tracks the total number of visitors to the website.
- Provides an API to retrieve and log visit data.
- Built with **Express.js** and **MongoDB**.
- Dockerized for easy deployment.

## Technologies Used

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for Node.js)
- **MongoDB** (Database to store visit data)
- **Docker** (Containerization for easy deployment)
- **HTML/CSS/JavaScript** (Frontend)

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 18)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed locally or use a cloud instance)
- [Docker](https://www.docker.com/get-started) (optional, for containerization)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/visitor-tracker.git
cd visitor-tracker
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Configure MongoDB

Ensure MongoDB is running locally or configure a MongoDB cloud instance.

If you are using a local MongoDB instance, the default URI should work: `mongodb://localhost:27017/visitor-tracker`.

### 4. Set up Environment Variables

Create a `.env` file in the root of your project and configure the MongoDB URI.

```bash
MONGO_URI=mongodb://localhost:27017/visitor-tracker
```

### 5. Start the Application

Run the Express app:

```bash
npm start
```

By default, the app will run on `http://localhost:5000`.

### 6. Test the Application

Once the application is running, visit `http://localhost:5000` in your browser. The page will fetch the visitor count and log any new visits to the database.

### 7. View Visitor Data

To view the logged data (i.e., the IP addresses and browser information), you can visit the following endpoint using a browser or an API client (like Postman):

```
GET http://localhost:5000/api/v1/getData
```

This will return a list of all recorded visits.

---

## API Endpoints

### 1. Log a Visit (POST)

- **URL**: `/api/v1/log-visit`
- **Method**: POST
- **Request Body**:

```json
{
  "ipAddress": "127.0.0.1",
  "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
```

- **Response**:

```json
{
  "success": true,
  "message": "Visit logged successfully"
}
```

### 2. Get Visitor Data (GET)

- **URL**: `/api/v1/getData`
- **Method**: GET
- **Response**:

```json
[
  {
    "_id": "123abc456",
    "ipAddress": "127.0.0.1",
    "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "__v": 0
  }
]
```

---




