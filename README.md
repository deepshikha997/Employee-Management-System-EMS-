# Employee Management System (EMS)

A frontend-only Employee Management System built with React, Vite, and Tailwind CSS.

This demo supports:
- Admin login to create and assign tasks
- Employee login to accept tasks and mark them as completed/failed
- Live task-count updates with `localStorage` persistence

## Tech Stack

- React 18
- Vite
- Tailwind CSS 4
- Context API (`AuthContext`) for shared app state

## Features

- Role-based login: Admin and Employee flows
- Admin dashboard:
  - Create and assign tasks
  - View all employees and task statistics
- Employee dashboard:
  - View assigned tasks
  - Accept new tasks
  - Mark active tasks as completed or failed
- Modern blue glassmorphism UI
- Data persistence in browser `localStorage`

## Demo Credentials

### Admin
- Email: `admin@me.com`
- Password: `123`

### Employees
- `e@e.com` / `123` (Arjun)
- `employee2@example.com` / `123` (Sneha)
- `employee3@example.com` / `123` (Ravi)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/deepshikha997/Employee-Management-System-EMS-.git
cd Employee-Management-System-EMS
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open in browser
```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Screenshots
Login
<img width="1920" height="1007" alt="Screenshot (40)" src="https://github.com/user-attachments/assets/e10d2554-c506-4341-a072-2765acd26a58" />

AdminDashboard
<img width="1920" height="1021" alt="Screenshot (44)" src="https://github.com/user-attachments/assets/e33f2cb0-81f8-44e2-958e-fff70d8a6271" />

EmployeePage
<img width="1920" height="1028" alt="Screenshot (45)" src="https://github.com/user-attachments/assets/aa1c1f09-028e-4e23-9382-01bcc64ba66b" />

## Notes

- This is a demo frontend project (no backend/auth server).
- Credentials and data are demo-only and stored in browser `localStorage`.
- If you want a production-ready version, add backend auth, secure password hashing, and a database.
