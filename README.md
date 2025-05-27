Here's a complete, clean, and production-ready **`README.md`** file for your MediConnect project. It includes:

- 📦 Project description
- 🧠 Tech stack
- 🔧 Installation steps
- 🚀 Running both frontend & backend
- 🔐 Authentication details
- 🧪 API & role access info

---

## ✅ `README.md` – Copy & Paste

```md
# 🏥 MediConnect

MediConnect is a full-stack medical management system that supports role-based dashboards for patients, doctors, and admins. Built with React, TypeScript, Node.js, Express, PostgreSQL, and Material UI, it provides a modern and secure interface for managing medical data.

---

## 🚀 Features

- ✅ User registration & login with JWT auth
- ✅ Role-based dashboards for:
  - Patient
  - Doctor
  - Admin
- ✅ RESTful APIs for:
  - Patients (CRUD)
  - Doctors (read/create)
  - Users (admin view)
- ✅ Protected routes using middleware
- ✅ Logout & local storage token handling

---

## 🧠 Tech Stack

**Frontend:**
- React + TypeScript
- Material UI
- React Router DOM

**Backend:**
- Node.js + Express
- TypeScript
- PostgreSQL
- JWT + Bcrypt
- Swagger (optional for docs)

---

## ⚙️ Installation

### 🔹 1. Clone the Repo

```bash
git clone https://github.com/DishaniS/MediConnect.git
cd MediConnect
```

### 🔹 2. Setup PostgreSQL Database

Create a database named `mediconnect`.

Run this SQL to create necessary tables:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT CHECK (role IN ('patient', 'doctor', 'admin')) NOT NULL
);

CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age INT,
  gender TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  specialization TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/mediconnect
```

Then run:
```bash
npm start
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication & Roles

### 🔸 Register a user:

- `POST /api/auth/register`

Fields:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "patient" // or doctor/admin
}
```

### 🔸 Login:

- `POST /api/auth/login`

Returns:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "email": "...",
    "role": "..."
  }
}
```

---

## 🧪 API Routes

| Endpoint | Role Access | Description |
|----------|-------------|-------------|
| `/api/patients` | admin, doctor | Get all patients |
| `/api/patients/:id` | all | Get one patient |
| `/api/patients` (POST) | admin | Create a patient |
| `/api/doctors` | admin, patient | List doctors |
| `/api/admin/users` | admin | List all users |

---

## 📁 Folder Structure

```
MediConnect/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── index.ts
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── routes/
│   └── App.tsx
```

---

## ✅ Status

- ✅ Backend REST API — Completed
- ✅ Frontend Role Dashboards — Completed
- 🔜 UI Polishing & File Upload (optional)

---

## 🧑‍💻 Author

Built with ❤️ by [@DishaniS](https://github.com/DishaniS)

---

## 📜 License

This project is licensed under the MIT License.
```

---

Let me know if you'd like to:
- Add Swagger API docs
- Deploy to Render / Vercel
- Or generate a Postman collection for testing endpoints!