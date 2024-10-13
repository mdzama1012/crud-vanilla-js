# Vanilla JavaScript CRUD Project

This project is a simple web application that interacts with a CRUD API (previously built with Node.js and Express) to manage user data. The front end is built using vanilla JavaScript and allows users to add, edit, and delete users through a dynamic UI.

## Project Structure

The project consists of the following files and directories:

```
- index.html
- style.css
- scripts/
    - dom.js
    - api.js
    - main.js
```

### 1. `index.html`

This is the main HTML file that provides the structure of the web page. It contains the layout of the UI elements such as forms, input fields, buttons, and a table that displays the list of users.

Key elements include:

- **Form** to add or edit user data.
- **Table** to display the list of users.
- **Buttons** for editing and deleting users.

### 2. `style.css`

This file is responsible for styling the UI elements. It controls the appearance of the form, buttons, and table to ensure a simple and user-friendly interface.

### 3. `scripts/`

This folder contains all the JavaScript files responsible for the functionality of the application.

- **`dom.js`**:

  - Handles all the DOM manipulation tasks.
  - Functions to dynamically create and update HTML elements based on user interactions (e.g., adding new rows to the table, updating existing rows, removing rows).
  - Updates the user interface in response to CRUD operations.

- **`api.js`**:

  - Handles the API requests to the CRUD backend.
  - Includes functions for making `GET`, `POST`, `PUT`, and `DELETE` requests to the API for fetching, adding, updating, and deleting user data respectively.
  - Uses `fetch()` to communicate with the server.

- **`main.js`**:
  - The main JavaScript file that ties everything together.
  - Sets up event listeners on the form and buttons.
  - Manages the flow of the application by calling functions from `dom.js` and `api.js` based on user actions.
  - Coordinates CRUD operations and updates the UI accordingly.

## Purpose

The purpose of this project is to create a simple user management system that allows users to perform basic CRUD operations (Create, Read, Update, Delete) on a user database through a front-end interface.

The project demonstrates how vanilla JavaScript can be used to interact with a RESTful API and manage the front-end UI dynamically without any libraries or frameworks.

## How It Works

1. **Fetching Users**:

   - When the page loads, `main.js` calls a function from `api.js` to fetch the list of users from the API.
   - The data is then passed to `dom.js` to dynamically render the users in a table.

2. **Adding Users**:

   - When a user submits the form, `main.js` captures the form data and sends it to `api.js` to create a new user via a `POST` request.
   - After a successful response, `dom.js` updates the table with the new user.

3. **Editing Users**:

   - Clicking the "Edit" button next to a user in the table fills the form with the user's data for editing.
   - Once the form is submitted, `main.js` sends the updated data to `api.js`, which performs a `PUT` request to update the user.
   - The UI is then updated via `dom.js` to reflect the changes.

4. **Deleting Users**:
   - Clicking the "Delete" button triggers an event that calls `api.js` to send a `DELETE` request to the server.
   - After the user is deleted, `dom.js` removes the user from the table in the UI.

## Conclusion

This project provides a simple yet functional example of how vanilla JavaScript can be used to build a full-stack application that interacts with a back-end API to perform CRUD operations. The separation of concerns between DOM manipulation, API interaction, and application logic ensures clean and maintainable code.
