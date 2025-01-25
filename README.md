# Task Manager

This is a simple task manager app built using **Vite** and **React**. The app allows you to perform CRUD operations on tasks, filter tasks by status and priority, mark tasks as completed, navigate to task details, and manage pagination. It also stores data in **localStorage** using an initial API call.

## URL
https://stamp-my-visa-task-manager.vercel.app/

## Installation

- Clone the repository
- Install the required dependencies: ```npm install```
- Run the development serve: ```npm run dev```
- Open server ```http://localhost:5173```

## Features
- **CRUD Operations:** Add, edit, delete, and update tasks.
- **Filter Tasks:** Filter tasks based on status (completed or not) and priority.
- **Complete Task:** Option to mark tasks as completed or incomplete.
- **Task Details:** Clicking on a task navigates to the task's details page.
- **Pagination:** Paginate the task list and choose the number of tasks per page.
- **LocalStorage Integration:** The app stores task data in local storage using an initial API call.
- **Styling:** Tailwind CSS for responsive and clean UI design.

## State Managament
I chose **Context API** and **useReducer** for simplicity and minimal setup, making it ideal for the current task manager app. Redux, while powerful, adds unnecessary complexity at this stage, but it can be integrated in the future as the app scales and requires more advanced features.

## Tech choice
TypeScript, ReactJS, Tailwind, Context API + useReducer
