import { useNavigate, useParams } from "react-router-dom";
import { useTaskProvider } from "../../context/TaskContext";
import Badge from "../../shared/components/Badge";
import { priorityIcon } from "../../constant";
import Button from "../../shared/components/Button";

const TaskView = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { state } = useTaskProvider();
  const navigate = useNavigate();
  if (!id || isNaN(Number(id))) {
    return <p>Task not found!</p>;
  }

  const task = state.tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return <p>Task not found!</p>;
  }

  return (
    <div className="p-4 w-full bg-white rounded-lg border border-gray-200 gap-4 h-fit">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{task.todo}</h1>
        <div className="flex gap-2">
          <Button
            className="bg-gray-800 text-white hover:bg-blue-500 w-full md:w-auto"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <span className="mx-2">{priorityIcon(task.priority)}</span>
        <Badge
          title={task.completed ? "✅ Completed" : "🔄 In Progress"}
          customColor={
            task.completed
              ? "bg-green-50 font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
              : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
          }
        />
      </div>
    </div>
  );
};

export default TaskView;
