import { useTaskProvider } from '../../../context/TaskContext';
import { PRIORITY_LEVELS, TASK_STATUS } from '../../../constant';
import Dropdown from '../../../shared/components/Dropdown';
import Button from '../../../shared/components/Button';

type TaskFilterHeaderProps = {
  searchQuery: string;
  status: string;
  priority: string;
  handleSearchQueryChange: (query: string) => void;
  handleStatusChange: (status: string) => void;
  handlePriorityChange: (priority: string) => void;
};

const priorities = ["All", ...PRIORITY_LEVELS];

const TaskFilterHeader = ({
  searchQuery,
  handleSearchQueryChange,
  handleStatusChange,
  status,
  priority,
  handlePriorityChange,
}: TaskFilterHeaderProps) => {
  const { state } = useTaskProvider();

  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const totalTasks = state.tasks.length;

  const renderPriorityButton = (label: string) => (
    <Button
      key={label}
      onClick={() => handlePriorityChange(label)}
      className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer focus:outline-none ${
        priority === label
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </Button>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <p className="text-sm text-gray-500">
          {completedTasks}/{totalTasks} tasks completed
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Search your task"
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2 mx-2">{priorities.map(renderPriorityButton)}</div>
        <Dropdown
          options={TASK_STATUS}
          selectedValue={status}
          onSelect={handleStatusChange}
          label=" Status"
        />
      </div>
    </div>
  );
};

export default TaskFilterHeader;
