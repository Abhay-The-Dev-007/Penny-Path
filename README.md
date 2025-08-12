PENNY PATH —-> A MERN Expense Tracker
Penny Path is a full-stack MERN application designed to help users track expenses, manage incomes, and visualize their financial journey.
It offers user authentication, insightful financial charts, and interactive dashboards to monitor, analyze, and export your transactions.


✨ Features

🔐 User Authorization

Sign up / Log in / Log out functionality
Secure authentication using JWT and password hashing
User-specific data isolation (only you see your transactions)

📊 Financial Overview

Recent Transactions — view your last few activities at a glance
Total Balance, Total Income & Total Expense — calculated dynamically
Pie Chart — expense distribution by category
Last 60 Days Income Pie Chart — see where your earnings come from
Last 30 Days Expense Bar Graph — visualize recent spending trends
Income Overview & Expense Overview — summary statistics

🗂 Dashboards

Expense Dashboard — add, delete, and download expense data as excel
Income Dashboard — add, delete, and download income data as excel
Export your income and expense logs for offline use



🏗 Tech Stack

Layer	                    Technology

Frontend	                React (Vite), Axios, Chart.js / Recharts, TailwindCSS
Backend	                  Node.js, Express.js
Database	                MongoDB
Auth	                    JWT, bcrypt
Deployment	              Render / Vercel / MongoDB Atlas



Environment Variables
.env files in both frontend and backend:

Backend .env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Frontend .env
VITE_BACKEND_URL=http://localhost:5000


Folder Structure

penny-path/
│
├── backend/
│   ├── config/         
│   ├── controllers/    
│   ├── models/        
│   ├── routes/        
│   ├── middleware/     
│   ├── uploads/        
│   └── server.js    
│
├── frontend/expense-tracker
│   ├── src/
│   │   ├── components/ 
│   │   ├── pages/     
│   │   ├── assets/   
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── charts/
│   │   ├── utils/ 
│   │   ├── App.jsx/
│   │   ├── Index.css/
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md


🔒 Security

Passwords are hashed using bcrypt
JWT-based authentication
Only authenticated users can access financial data


📜 License
This project is licensed under the MIT License — feel free to use and modify it.

