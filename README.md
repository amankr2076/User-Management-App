# User Management System

## Overview and Introduction  
This is a web application for managing user data, built using **Angular**. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. 

### Features
- View a list of all users.
- Add a new user.
- Edit the details of an existing user.
- Delete a user.
- Validations to ensure data accuracy.

### Tech Stack
- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


 ## Interfaces

 - **HomePage**:

   ![Alt Text](https://github.com/amankr2076/User-Management-App/blob/main/images/Users.png)
   ![Alt Text](https://github.com/amankr2076/User-Management-App/blob/main/images/Adding-User.png)


## API Endpoints
  Here are the assumed API endpoints used in the project:
  - ```GET /person``` - Fetch all users.
  - ```GET /person/:id``` - Fetch a single user by ID.
  - ```POST /person``` - Add a new user.
  - ```PUT /person/:id``` - Update an existing user.
  - ```DELETE /person/:id``` - Delete a user.

    **Update these endpoints based on your actual backend setup.**
    

---

## Installation Steps 

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli)
- Package manager (npm or yarn)

### Installation

- **Clone the repository**:
   ```bash
   git clone https://github.com/amankr2076/User-Management-App.git
   ```
- **Install all dependencies**  
   ```bash  
   npm install
   ```
- **To run the server**
  ```bash
   npm run dev
  ```
- **To run the client**
  ```bash
  npm start
  ```
- **Access the Application**
    ```bash
    http://localhost:3000
    ```
  

