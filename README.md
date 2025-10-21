# Employee Record Management System (HRIS)

A modern, responsive, and feature-rich mini Human Resource Information System (HRIS) designed to streamline employee data management. This application provides a clean, Apple-inspired interface for viewing, adding, editing, and managing employee records, complete with role-based access control and data visualization dashboards.

---

## ✨ Features

- **👤 Employee Management:** Full CRUD (Create, Read, Update, Delete) functionality for employee records.
- **📊 Interactive Dashboard:** At-a-glance view of key metrics like total employees, active staff, and staff on leave.
- **📈 Data Visualization:**
    - **Department Distribution:** A bar chart showing the number of employees in each department.
    - **Employee Growth Trend:** A line chart visualizing company growth over time.
- **🔐 Role-Based Access Control (RBAC):**
    - **Admin:** Full access to all features, including editing and deleting employee records.
    - **HR User:** View-only access to the employee list and dashboard. Cannot modify or delete records.
- **🔍 Powerful Search & Filtering:**
    - Search employees by name or Employee ID.
    - Filter the employee list by department or employment status.
- **🌙 Light & Dark Mode:** A sleek, user-friendly theme toggle that respects user preferences and saves the setting locally.
- **📂 CSV Export:** Easily export the current list of filtered employees to a `.csv` file.
- **📱 Responsive Design:** A mobile-first design that ensures a seamless experience across all devices, from desktops to smartphones.
- **🖼️ Profile Photo Uploads:** Upload and display employee profile pictures (handled via Base64 encoding).

---

## 🧩 Tech Stack

This project is built as a self-contained frontend application using modern web technologies. It simulates a full-stack experience by managing state locally.

- **Frontend:**
    - [**React**](https://reactjs.org/) (v19) with TypeScript
    - [**Tailwind CSS**](https://tailwindcss.com/) for styling
    - [**Recharts**](https://recharts.org/) for data visualization
- **State Management:**
    - **React Context API** for global state management (Authentication, Theme).
    - **React Hooks (`useState`, `useMemo`)** for local component state.
- **Routing:**
    - Simulated single-page application (SPA) routing managed by React component state.

---

## 🚀 Getting Started

This application is designed to run directly in a modern browser environment that supports ES modules.

### Prerequisites

No complex setup is required. All dependencies are loaded via CDN, and the application is self-contained within the provided files. You just need a modern web browser.

### How to Run the Application

1.  **Ensure all files are in the same directory:**
    - `index.html`
    - `index.tsx`
    - `App.tsx`
    - `README.md`
    - and all other `.tsx` files in their respective folders (`components/`, `context/`, etc.).

2.  **Open `index.html` in a web browser:**
    - The application will automatically initialize and render. The `index.tsx` script is loaded as a module.

---

## 📂 Project Structure

The project follows a component-based architecture to ensure code is organized, scalable, and easy to maintain.

```
/
├── components/
│   ├── auth/
│   │   └── Login.tsx         # Simulated login component
│   ├── dashboard/
│   │   ├── Dashboard.tsx       # Main dashboard view
│   │   ├── StatCard.tsx        # Reusable card for stats
│   │   └── ...               # Chart components
│   ├── employees/
│   │   ├── EmployeeList.tsx    # Main employee management view
│   │   ├── EmployeeTable.tsx   # Table to display employees
│   │   ├── EmployeeFormModal.tsx # Modal for add/edit
│   │   └── ...               # Delete confirmation modal
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── shared/
│       └── icons/
│           └── Icon.tsx        # SVG icon components
├── context/
│   └── AuthContext.tsx       # Manages user authentication state
├── hooks/
│   └── useDarkMode.ts        # Custom hook for theme management
├── App.tsx                   # Main application component and router
├── index.html                # Entry point HTML file
├── index.tsx                 # React application entry point
├── constants.ts              # Mock data (employees, departments)
├── types.ts                  # TypeScript type definitions
└── README.md                 # You are here!
```

---

## 🕹️ How to Use the Application

### 1. Login
- The application starts on a simulated login screen.
- You can choose to log in as either an **Admin** or an **HR User**.
- This choice determines your access level throughout the application.

### 2. The Dashboard
- After logging in, you are greeted with the dashboard.
- Here you can see key statistics and charts related to the employee database.

### 3. Managing Employees
- Navigate to the **"Employees"** page via the sidebar.
- **View:** All employees are listed in a clean, responsive table.
- **Search and Filter:** Use the controls at the top to find specific employees or narrow the list by department or status.
- **Add Employee (Admin only):** Click the "Add Employee" button to open a modal form and enter the details for a new employee.
- **Edit Employee (Admin only):** Click the pencil icon next to an employee's record to modify their details.
- **Delete Employee (Admin only):** Click the trash icon to permanently remove an employee's record. A confirmation modal will prevent accidental deletions.
- **Export Data:** Click the "Export" button to download the currently displayed employee list as a CSV file.

### 4. Dark Mode
- Use the sun/moon icon in the header to toggle between light and dark themes. Your preference is automatically saved for your next visit.

### 5. Logout
- Click the logout icon in the header to return to the login screen.
