import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Todo } from "../../../types";
import Badge from "../../../shared/components/Badge";
import { priorityIcon } from "../../../constant";
import Button from "../../../shared/components/Button";

interface TaskDetailsProps {
  task: Todo;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
  onView: () => void;
}

function TaskDetails({
  task,
  onEdit,
  onDelete,
  onToggle,
  onView,
}: TaskDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg overflow-hidden p-2 my-2 border border-gray-200">
      <div className="flex items-center w-full md:w-auto">
        <input
          type="checkbox"
          checked={task.completed}
          className="mx-2"
          onChange={onToggle}
        />
        <p
          className={`flex-1 text-gray-800 text-sm md:text-base cursor-pointer hover:text-blue-700 ${task.completed ? "line-through text-gray-500" : ""
            }`}
          onClick={onView}
        >
          {task.todo}
        </p>
      </div>
      <div className="flex items-center">
        <span className="mx-2">{priorityIcon(task.priority)}</span>
        <Badge
          title={task.completed ? "✅ Completed" : "🔄 In Progress"}
          customColor={
            task.completed
              ? "bg-green-50 font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
              : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-700/10 ring-inset"
          }
        />
        <Button className="text-blue-500 hover:text-blue-700 px-2"
          onClick={onEdit}
        >
          <PencilIcon className="h-5 w-5" />
        </Button>
        <Button className="text-red-500 hover:text-red-700 px-2"
          onClick={onDelete}
        >
          <TrashIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default TaskDetails;
