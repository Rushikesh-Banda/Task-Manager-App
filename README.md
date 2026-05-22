This project is a Task Manager Application built using:

* React.js
* Vite
* JSX Components
* CSS Styling

The application helps users manage daily tasks with features like:

* Add Tasks
* Display Tasks
* Manage Task List
* Component-Based Architecture

The project demonstrates modern frontend development using React and reusable components.

---

# 🚀 Features

## ✅ Add New Tasks

Users can:

* Enter task details
* Add tasks dynamically
* Manage task input

---

## ✅ Display Task List

Shows all tasks in an organized list format.

---

## ✅ Component-Based Architecture

Application is divided into reusable React components.

---

## ✅ Responsive UI

Simple and clean interface using CSS styling.

---

# 📂 Project Structure

```bash id="4crn79"
Task-Manager-App/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── AddTaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# 📘 Technologies Used

| Technology     | Purpose               |
| -------------- | --------------------- |
| React.js       | Frontend Library      |
| Vite           | Build Tool            |
| JSX            | UI Structure          |
| CSS            | Styling               |
| JavaScript ES6 | Logic & Functionality |

---

# 📌 Important React Concepts

---

# 🔹 React.js

## Definition

React.js is a JavaScript library used for building user interfaces.

### Features

* Component-based architecture
* Fast rendering
* Reusable UI components

---

# 🔹 Components

## Definition

Components are reusable pieces of UI in React.

### Types

* Functional Components
* Class Components

This project uses Functional Components.

---

# 🔹 JSX

## Definition

JSX stands for JavaScript XML.

It allows writing HTML inside JavaScript.

### Example

```jsx id="g4a2d7"
function App() {
  return <h1>Hello React</h1>;
}
```

---

# 🔹 Props

## Definition

Props are used to pass data from parent component to child component.

### Example

```jsx id="u7n8pl"
<TaskItem task={task} />
```

---

# 🔹 State

## Definition

State is used to store dynamic data inside components.

### Example

```jsx id="5c4hrn"
const [tasks, setTasks] = useState([]);
```

---

# 🔹 Event Handling

## Definition

React handles user interactions using events.

### Example

```jsx id="l5h6nr"
<button onClick={handleAddTask}>
  Add Task
</button>
```

---

# 📄 Components Explanation

---

# 📄 AddTaskForm.jsx

## Purpose

Handles task input form.

### Features

* Accept task details
* Add tasks dynamically
* Form submission handling

---

# 📄 TaskItem.jsx

## Purpose

Displays individual task details.

### Features

* Render single task
* Display task information

---

# 📄 TaskList.jsx

## Purpose

Displays all tasks in list format.

### Features

* Loop through tasks
* Render multiple TaskItem components

---

# 📄 TaskManager.jsx

## Purpose

Main task management logic.

### Features

* Manage task state
* Add/remove tasks
* Connect all components

---

# 📄 App.jsx

## Purpose

Root component of the application.

### Features

* Loads TaskManager component
* Main UI rendering

---

# 📄 main.jsx

## Purpose

Application entry point.

### Features

* Renders React application
* Connects React to DOM

### Example

```jsx id="yjqk4t"
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
```

---

# 🔹 Vite

## Definition

Vite is a fast frontend build tool used for React applications.

### Advantages

* Fast development server
* Hot Module Replacement (HMR)
* Optimized builds

---

# 🔹 CSS Styling

## Purpose

Used for:

* Layout design
* Responsive UI
* Task styling

Files:

* `App.css`
* `index.css`

---

# 📌 Application Workflow

```text id="ihg4wk"
User Adds Task
      ↓
AddTaskForm Handles Input
      ↓
Task State Updated
      ↓
TaskList Re-renders
      ↓
TaskItem Displays Task
```

---

# 📌 Common React Hooks Used

| Hook      | Purpose                |
| --------- | ---------------------- |
| useState  | Manage component state |
| useEffect | Handle side effects    |

---

# ▶ How to Run the Project

---

## Step 1: Install Dependencies

```bash id="v5a9lx"
npm install
```

---

## Step 2: Start Development Server

```bash id="s0f7z8"
npm run dev
```

---

## Step 3: Open Browser

```text id="f12z8m"
http://localhost:5173
```

---

# 📌 Build for Production

```bash id="5u2l6h"
npm run build
```

---

# 📌 Folder Explanation

| Folder/File | Purpose                   |
| ----------- | ------------------------- |
| public      | Static assets             |
| src         | Source code               |
| components  | Reusable React components |
| App.jsx     | Main component            |
| main.jsx    | Entry point               |
| index.css   | Global styles             |

---

# 📚 Learning Outcomes

After completing this project, the following concepts are understood:

* React Fundamentals
* JSX Syntax
* Component-Based Architecture
* State Management
* Props Handling
* Event Handling
* React Project Structure
* Frontend Development Workflow

---

# 🛠 Tools Used

* VS Code
* React.js
* Vite
* GitHub
* npm

---

# 📌 Real-World Use Cases

| Feature          | Real-World Example     |
| ---------------- | ---------------------- |
| Task Tracking    | Productivity apps      |
| State Management | Dynamic UI updates     |
| Components       | Scalable frontend apps |
| Forms            | User input handling    |

---

# 📌 Conclusion

This Task Manager Application demonstrates modern frontend development using React.js and Vite. The project follows a component-based architecture and provides hands-on experience with JSX, state management, props, event handling, and reusable UI components commonly used in real-world React applications.
