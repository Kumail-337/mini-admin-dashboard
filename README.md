A responsive, fully functional Admin Dashboard application built with React and Tailwind CSS v4. This project serves as a comprehensive demonstration of frontend development skills, featuring mock authentication, protected routes, and complete CRUD (Create, Read, Update, Delete) operations using a mock backend.


---

## ✨ Key Features

- **🔒 Authentication & Protected Routes:** - Secure login simulation with hardcoded credentials.
  - Token persistence via `localStorage` (keeps users logged in after a refresh).
  - Unauthorized users are automatically redirected to the login page.
- **📈 Dashboard Overview:** Dynamic statistics cards that fetch and display real-time counts of total users and tasks from the database.
- **👥 User Management:** - Add new users with unique ID generation.
  - View a formatted table of all users and their roles.
  - Delete existing users.
- **✅ Task Management:** - Create new tasks with default 'Pending' statuses.
  - Update task statuses (Pending, In Progress, Completed) via dropdowns.
  - Filter tasks by their current status.
  - Delete tasks.
- **⚙️ Settings UI:** A responsive profile and preferences update interface (Visual/UI only).

---

## 🛠️ Technologies & Tools

- **Frontend Framework:** React.js (Bootstrapped with Vite)
- **Routing:** React Router DOM (v6)
- **State Management:** React Context API
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Mock Backend/Database:** JSON Server (`db.json`)

---

## 🚀 Local Installation & Setup

Because this application relies on a mock backend database to store users and tasks, **you must run two separate terminal windows** to make the app work properly.

### 1. Clone & Install
Open your terminal and run the following commands:
```bash
git clone [https://github.com/YOUR_USERNAME/mini-admin-dashboard.git](https://github.com/YOUR_USERNAME/mini-admin-dashboard.git)
cd mini-admin-dashboard
npm install
````

### 2. Start the Database (Terminal 1)

Leave this terminal open and running in the background. This allows your React app to fetch and save data.

Bash

```
npm run server
```

_Note: This will start `json-server` on `http://localhost:5000`._

### 3. Start the React App (Terminal 2)

Open a **new, second terminal window** inside the same `mini-admin-dashboard` folder and run:

Bash

```
npm run dev
```

_Note: This will start the Vite frontend, typically on `http://localhost:5173`._

## 🔐 Mock Login Credentials

To access the dashboard, use the following credentials on the login screen:

- **Email:** `admin@admin.com'
- **Password:** `password`

## ⚠️ Troubleshooting Common Issues

**Issue:** Clicking "Add User" or "Add Task" throws an alert saying: _"Failed to add user. Ensure your json-server is running."_

**Solution:** This happens when your frontend (`localhost:5173`) cannot communicate with your backend (`localhost:5000`).

1. Check your terminal windows. You must have the `npm run server` command actively running in a terminal.
2. Ensure no other applications on your computer are using port 5000.
3. Verify that your `src/services/api.js` file is pointing to `http://localhost:5000`.

## 📂 Project Structure

```
mini-admin-dashboard/
├── db.json                 # Mock database
├── package.json            # Dependencies & Scripts
├── tailwind.config.js      # Tailwind configurations (if applicable)
├── vite.config.js          # Vite configuration
└── src/
    ├── App.jsx             # Route definitions & Context Providers
    ├── main.jsx            # Entry point
    ├── index.css           # Global styles & Tailwind imports
    ├── context/
    │   └── AuthContext.jsx # Global authentication state
    ├── layouts/
    │   └── DashboardLayout.jsx # Sidebar and main content wrapper
    ├── pages/
    │   ├── Login.jsx       # Authentication page
    │   ├── Dashboard.jsx   # Stats overview
    │   ├── Users.jsx       # User CRUD operations
    │   ├── Tasks.jsx       # Task CRUD operations
    │   └── Settings.jsx    # UI Settings page
    └── services/
        └── api.js          # Axios configuration
```