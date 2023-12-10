# Library Management API

## Overview

This is a simple RESTful API for managing a library system. The API interacts with a MongoDB database to perform basic CRUD operations on books.

## Prerequisites
Before running the application, ensure you have the following installed:

Node.js
npm (Node Package Manager)
MongoDB (Make sure MongoDB is running locally or update the connection string accordingly)

## Endpoints

### 1. Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Response:**
  - 200 OK: Returns an array of books.
  - 500 Internal Server Error: If there's an error retrieving books.

### 2. Add a New Book

- **Endpoint:** `POST /api/books`
- **Request:**
  - Body: JSON object representing the new book.
- **Response:**
  - 201 Created: Returns the added book.
  - 400 Bad Request: If the request payload is invalid or a duplicate book entry.
  - 500 Internal Server Error: If there's an error adding a new book.

### 3. Update Book Details

- **Endpoint:** `PUT /api/books/{id}`
- **Request:**
  - Params: Book ID in the URL.
  - Body: JSON object with updated book details.
- **Response:**
  - 200 OK: Returns the updated book.
  - 404 Not Found: If the specified book is not found.
  - 500 Internal Server Error: If there's an error updating book details.

## Usage

1. Start the server using `node index.js`.
2. Use a tool Postman to make requests to the API endpoints.

## Usage with Postman

### 1. Retrieve All Books:

- **Method:** GET
- **URL:** `http://localhost:3000/api/books`
- **Description:** Retrieves a list of all books in the library.

### 2. Add a New Book:

- **Method:** POST
- **URL:** `http://localhost:3000/api/books`
- **Description:** Adds a new book to the library.
- **Body:** JSON object representing the new book.
  ```json
  {
    "title": "New Book",
    "author": "New Author",
    "year": "2023"
  }

### 3. Update Book Details:

- **Method:** PUT
- **URL:** `http://localhost:3000/api/books/{id}`
- **Description:** Updates the details of a specific book in the library.
- **Params:** Book ID in the URL.
- **Body:** JSON object with updated book details.

   **Example Request:**
   ```json
   PUT http://localhost:3000/api/books/1
   {
     "title": "Updated Title",
     "author": "Updated Author",
     "year": "2024"
   }

## Error Handling

- The API returns appropriate HTTP status codes and error messages for different scenarios.
- Ensure to handle errors gracefully.

## Seeding the Database

To seed the database with mock data, follow these steps:

- Create a .env file in the root directory with the following:
env
- Copy code

    ```MONGODB_URI=<your-mongodb-connection-string>
    ```
    Replace <your-mongodb-connection-string> with your MongoDB connection string.



