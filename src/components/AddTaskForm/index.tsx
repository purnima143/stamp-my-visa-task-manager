import { useRef, useState } from "react";
import { useTaskProvider } from "../../context/TaskContext";
import { Priority } from "../../types";
import { PRIORITY_LEVELS } from "../../constant/index";
import Dropdown from "../../shared/components/Dropdown";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/components/Button";
function AddTaskForm() {
  const taskNameValueRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useTaskProvider();
  const { id } = useParams()
  const [priority, setPriority] = useState<Priority>(PRIORITY_LEVELS[0]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);
  const navigate = useNavigate()
  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const handleSubmit = () => {
    const taskName = taskNameValueRef.current?.value || "";
    if (taskName.trim()) {
      dispatch({ type: "ADD_TASK", payload: { taskName, priority } });
      if (taskNameValueRef.current) {
        taskNameValueRef.current.value = "";
      }
      setPriority(PRIORITY_LEVELS[0]);
      setIsFormVisible(false);
      if (id) navigate("/")
    } else {
      console.error("Task name cannot be empty");
    }
  };

  function handleSetPriority(value: string) {
    setPriority(value as Priority)
  }
  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg p-4 border border-gray-200 h-fit">
      <Button
        variant="primary"
        onClick={toggleFormVisibility}
        className={`w-full bg-blue-700 text-white py-2 cursor-pointer rounded hover:bg-blue-800 mb-4 md:hidden ${isFormVisible ? "hidden" : ""
          }`}
      >
        + Add Task
      </Button>

      <div className={`${isFormVisible ? "block" : "hidden"} md:block`}>
        <h2 className="text-lg font-semibold mb-4">Add Task</h2>
        <div className="mb-4">
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700"
          >
            Task
          </label>
          <input
            type="text"
            id="task"
            ref={taskNameValueRef}
            placeholder="Enter task"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <Dropdown
            options={PRIORITY_LEVELS}
            selectedValue={priority}
            onSelect={handleSetPriority}
            label="Priority"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="w-full"
          >
            Submit Task
          </Button>
          <Button
            variant="secondary"
            onClick={toggleFormVisibility}
            className="ml-2 md:hidden"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskForm;
