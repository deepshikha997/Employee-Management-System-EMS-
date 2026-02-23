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
- `employee4@example.com` / `123` (Priya)
- `employee5@example.com` / `123` (Karan)

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

Add your screenshots in a folder like `screenshots/`, then reference them here:

```md
![Login Page](./screenshots/login.png)
![Admin Dashboard](./screenshots/admin-dashboard.png)
![Employee Dashboard](./screenshots/employee-dashboard.png)
```

## Notes

- This is a demo frontend project (no backend/auth server).
- Credentials and data are demo-only and stored in browser `localStorage`.
- If you want a production-ready version, add backend auth, secure password hashing, and a database.
