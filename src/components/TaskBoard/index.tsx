import { useState } from "react";
import { useTaskProvider } from "../../context/TaskContext";
import TaskFilterHeader from "./TaskFilterHeader";
import TaskList from "./TaskList";
import TaskPaginationControl from "./TaskPaginationControl";

function TaskBoard() {
  const { state } = useTaskProvider();
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [perPage, setPerPage] = useState(5);
  const [priority, setPriority] = useState("All");
  const taskDatas = state.tasks.filter((task) => {
    if (status === "Completed" && !task.completed) return false;
    if (status === "Uncompleted" && task.completed) return false;
    if (priority !== "All" && task.priority !== priority) return false;
    if (task.todo.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }

    return false;
  });

  const totalData = Math.ceil(taskDatas.length / perPage);

  function handlePageSelector(currPage: number) {
    if (currPage > 0 && currPage <= totalData && currPage !== page) {
      setPage(currPage);
    }
  }

  function togglePerPage(currPageNumber: number) {
    setPerPage(currPageNumber);
    setPage(1);
  }

  function handleSearchQueryChange(value: string) {
    setSearchQuery(value)
  }
  function handleStatusChange(value: string) {
    setStatus(value)
  }
  function handlePriorityChange(value: string) {
    setPriority(value)
  }

  return (
    <div className="w-full h-fit">
      <TaskFilterHeader
        searchQuery={searchQuery}
        status={status}
        priority={priority}
        handleSearchQueryChange={handleSearchQueryChange}
        handleStatusChange={handleStatusChange}
        handlePriorityChange={handlePriorityChange}
      />
      <TaskList tasks={taskDatas.slice((page - 1) * perPage, page * perPage)} />
      <TaskPaginationControl
        handlePageSelector={handlePageSelector}
        page={page}
        totalData={totalData}
        togglePerPage={togglePerPage}
        perPage={perPage}
      />
    </div>
  );
}

export default TaskBoard;
