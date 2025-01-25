import { TaskAction, TaskState } from "../types";

export const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || JSON.stringify([])),
};

export const taskReducer = (state: TaskState, action: TaskAction) => {
  switch (action.type) {
    case "SET_TASKS": {
      localStorage.setItem("tasks", JSON.stringify(action.payload));
      return { ...state, tasks: action.payload };
    }
    case "ADD_TASK": {
      const newTask = {
        id: Date.now(),
        todo: action.payload.taskName,
        completed: false,
        userId: 152,
        priority: action.payload.priority,
      };
      const newData = { ...state, tasks: [newTask, ...state.tasks] };
      localStorage.setItem("tasks", JSON.stringify(newData.tasks));
      return newData;
    }
    case "EDIT_TASK": {
      const newData = state.tasks.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              todo: action.payload.name,
              priority: action.payload.priority,
            }
          : item
      );
      newData && localStorage.setItem("tasks", JSON.stringify(newData));
      return { ...state, tasks: newData };
    }
    case "TOGGLE_TASK_DONE": {
      const newData = state.tasks.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      localStorage.setItem("tasks", JSON.stringify(newData));
      return { ...state, tasks: newData };
    }
    case "DELETE_TASK": {
      const newData = state.tasks.filter((item) => item.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newData));
      return { ...state, tasks: newData };
    }
    default:
      return state;
  }
};
