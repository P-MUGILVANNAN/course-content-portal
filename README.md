# 📚 Course Content Portal

A web-based Course Content Portal developed to manage, organize, and share training materials for students and trainers in an efficient and accessible manner.

## 🚀 Features

- 🔐 **Authentication System** – Secure login and signup for Trainers.
- 📁 **Content Management** – Manage course contents.

## 🛠️ Tech Stack

| Layer         | Technology                                      |
|---------------|-------------------------------------------------|
| Frontend      | HTML, CSS, JavaScript, Bootstrap, React.js      |
| Backend       | Node.js, Express.js                             |
| Database      | MongoDB                                         |
| Authentication| JWT, Bcrypt                                     |
| Others        | Multer & Cludinary (for file upload), Mongoose  |

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/P-MUGILVANNAN/course-content-portal.git
   cd course-content-portal
Install dependencies

bash
npm install
Set up .env file
Create a .env file in the root directory and add:

env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the server
bash
npm start

Access the portal

http://localhost:5000

📁 Folder Structure

course-content-portal/
├── frontend/               # Frontend files (if separated)
├── backend/                # Backend logic
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── controllers/        # Business logic
│   └── middlewares/        # Auth and error handling
├── uploads/                # Stored course files
├── .env                    # Environment variables
├── package.json
└── README.md

👨‍💻 Author
Mugilvannan P – GitHub

🤝 Contributions
Contributions, issues, and feature requests are welcome. Feel free to fork the repo and submit a pull request.

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.
