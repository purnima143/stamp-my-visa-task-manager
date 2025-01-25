import { Todo } from "../../../types";
import TaskItem from "../TaskItem";

function TaskList({ tasks }: { tasks: Todo[] }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No tasks available
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
