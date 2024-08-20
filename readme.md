# Notes App

A simple and intuitive Notes App built using Node.js, Express, MongoDB, and EJS. This app allows users to create, update, delete, and view notes. Each note consists of a title and content, and the app provides a seamless interface for managing your notes.

## Features

- **Add Notes**: Create new notes with a title and content.
- **View Notes**: See a list of all your notes.
- **Update Notes**: Edit the title and content of your existing notes.
- **Delete Notes**: Remove notes that are no longer needed.
- **Smooth Scrolling**: Navigate through your notes with smooth scrolling for a better user experience.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript), CSS, JavaScript
- **Database**: MongoDB (Mongoose ORM)
- **Styling**: Custom CSS

## Installation

### Prerequisites

- Node.js
- MongoDB (Make sure MongoDB is installed and running on your machine)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/NamanS4ini/Notes-App
    cd Notes-App
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```


3. **Start the Application**:
    ```bash
    npm start
    ```
    The application will be running on `http://localhost:3000`.

## Usage

- **View Note**: View your list of notes.
- **Add Note**: Use the form to add a new note.
- **Edit Note**: Click the edit button next to any note to modify it.
- **Delete Note**: Click the delete button next to any note to remove it.

## Folder Structure

```plaintext
.
├── models
│   └── schema.js         # Mongoose model for notes
├── public
│   ├── css
│   │   └── styles.css  # CSS for styling
│   └── js
│       └── script.js   # JavaScript for front-end functionality
|
├── views
│   └── index.ejs       # Main EJS template for home page
|
├── main.js              # Main server file
├── package.json        # NPM dependencies and scripts
└── README.md           # This readme file
