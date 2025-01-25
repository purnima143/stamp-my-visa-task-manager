import { useParams } from "react-router-dom";

import AddTaskForm from "../AddTaskForm";
import TaskBoard from "../TaskBoard";
import TaskView from "../TaskView";
import useFetchTask from "../../hooks/useFetchTask";

function TaskContainer() {
  const { id } = useParams<{ id: string }>();
  useFetchTask()
  return (
    <div className="p-2 my-2 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4 p-4 h-fit bg-white">
      <AddTaskForm />
      {!id ? <TaskBoard /> : <TaskView />}
    </div>
  );
}
export default TaskContainer;
