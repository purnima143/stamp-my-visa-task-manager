import { PRIORITY_LEVELS } from "../../../constant";
import { useRef, useState } from "react";
import { Priority, Todo } from "../../../types";
import Dropdown from "../../../shared/components/Dropdown";
import Button from "../../../shared/components/Button";

interface EditTaskFormProps {
  task: Todo;
  onCancel: () => void;
  onSubmit: (name: string, priority: Priority) => void;
}

function EditTaskForm({ task, onCancel, onSubmit }: EditTaskFormProps) {
  const taskNameValueRef = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState<Priority>(task.priority);

  const handleSubmit = () => {
    onSubmit(taskNameValueRef.current?.value ?? "", priority);
  };

  const handleSetPriority = (value: string) => {
    setPriority(value as Priority);
  };

  return (
    <div className="bg-white rounded-lg p-4 my-2 border border-gray-200">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <label
          htmlFor="task"
          className="text-sm font-medium text-gray-700 w-full md:w-auto"
        >
          Task
        </label>
        <input
          type="text"
          id="task"
          ref={taskNameValueRef}
          defaultValue={task.todo}
          placeholder="Enter task"
          className="w-full md:flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Dropdown
          options={PRIORITY_LEVELS}
          selectedValue={priority}
          onSelect={handleSetPriority}
          label="Priority"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <Button onClick={handleSubmit} variant="primary">
          Submit Task
        </Button>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default EditTaskForm;
