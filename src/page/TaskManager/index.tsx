import TaskContainer from "../../components/TaskContainer";
import { TaskProvider } from "../../context/TaskContext";
import MainLayout from "../../shared/components/MainLayout";
import PageHeading from "../../shared/components/PageHeading";

function TaskManager() {
  return (
    <MainLayout>
      <PageHeading
        title="Task Manager"
        subtitle=" Manage your tasks efficiently and stay organized."
      />
      <TaskProvider>
      <TaskContainer />
      </TaskProvider>
    </MainLayout>
  );
}

export default TaskManager;
