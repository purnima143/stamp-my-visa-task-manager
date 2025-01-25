export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
  priority: Priority;
};

export type Priority = "Low" | "Medium" | "High";
export interface TaskState {
  tasks: Todo[];
}
export type TaskAction =
  | { type: "ADD_TASK"; payload: { taskName: string; priority: Priority } }
  | {
      type: "EDIT_TASK";
      payload: {
        id: number;
        name: string;
        priority: Priority;
      };
    }
  | { type: "TOGGLE_TASK_DONE"; payload: number }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "SET_TASKS"; payload: Todo[] };
