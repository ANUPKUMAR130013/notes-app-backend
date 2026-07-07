# 📝 Notes App Backend

A secure RESTful API for a Notes Application built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This backend allows users to register, log in, and manage their personal notes with full CRUD (Create, Read, Update, Delete) functionality.

---

## 🚀 Features

* User Registration
* User Login with JWT Authentication
* Password Encryption using bcryptjs
* Create Notes
* View All User Notes
* Update Notes
* Delete Notes
* Protected Routes using JWT
* MongoDB Database Integration
* RESTful API Architecture

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* dotenv
* CORS
* Nodemon

---

## 📁 Project Structure

```text
notes-app-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── noteController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── authRoutes.js
│   └── noteRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
https://github.com/ANUPKUMAR130013/notes-app-backend/tree/main
```

### 2. Navigate to the Project Folder

```bash
cd notes-app-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.



### 5. Start the Server

```bash
npm run dev
```

The server will run at:

```text
http://localhost:5000
```

---

## 📌 API Endpoints

### Authentication

#### Register User

**POST**

```text
/api/auth/register
```

Example Request

```json
{
  "name": "Anup Kumar",
  "email": "anup@gmail.com",
  "password": "123456"
}
```

---

#### Login User

**POST**

```text
/api/auth/login
```

Example Request

```json
{
  "email": "anup@gmail.com",
  "password": "123456"
}
```

Example Response

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

---

### Notes

> Include the following header in all Notes API requests.

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

#### Create Note

**POST**

```text
/api/notes
```

```json
{
  "title": "My First Note",
  "content": "This is my first note."
}
```

---

#### Get All Notes

**GET**

```text
/api/notes
```

---

#### Update Note

**PUT**

```text
/api/notes/:id
```

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

---

#### Delete Note

**DELETE**

```text
/api/notes/:id
```

---

## 🧪 Testing

Use **Postman** or **Thunder Client** to test the API.

1. Register a new user.
2. Log in to receive a JWT token.
3. Add the token to the `Authorization` header.
4. Perform Create, Read, Update, and Delete operations on notes.

---

## 📷 Expected Output

* User registration and login are successful.
* JWT token is generated after login.
* Authenticated users can create, view, update, and delete only their own notes.
* Unauthorized requests return an authentication error.

---

## 🔒 Security Features

* Passwords are securely hashed using bcryptjs.
* JWT-based authentication protects private routes.
* Environment variables are used for sensitive information.
* User-specific note access improves data security.

---

## 📈 Future Enhancements

* Note categories and tags
* Search and filtering
* Pagination
* Soft delete and restore
* File attachments
* Note sharing
* Rate limiting
* Unit and integration tests

---

## 👨‍💻 Author

**Anup Kumar**

B.Tech – Information Technology

---

