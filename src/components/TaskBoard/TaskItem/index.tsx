import { useTaskProvider } from "../../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Priority, Todo } from "../../../types";
import EditTaskForm from "../EditTaskForm";
import TaskDetails from "../TaskDetails";
import { PRIORITY_LEVELS } from "../../../constant";

interface TaskItemProps {
  task: Todo;
}

function TaskItem({ task }: TaskItemProps) {
  const { dispatch } = useTaskProvider();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditSubmit = (name: string, priority?: Priority) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, name, priority:priority|| PRIORITY_LEVELS[0] },
    });
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <EditTaskForm
        task={task}
        onCancel={() => setIsEdit(false)}
        onSubmit={handleEditSubmit}
      />
    );
  }

  return (
    <TaskDetails
      task={task}
      onEdit={() => setIsEdit(true)}
      onDelete={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
      onToggle={() => dispatch({ type: "TOGGLE_TASK_DONE", payload: task.id })}
      onView={() => navigate(`/task/${task.id}`)}
    />
  );
}

export default TaskItem;
