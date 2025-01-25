import { useEffect } from "react";
import { useTaskProvider } from "../context/TaskContext";
import { PRIORITY_LEVELS } from "../constant";
import { Todo } from "../types";

const useFetchTask = () => {
    const { dispatch } = useTaskProvider();

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = localStorage.getItem('tasks');
                if (!storedTasks) {
                    const tasksresponse = await fetch("https://dummyjson.com/todos");
                    const data = await tasksresponse.json()
                    const dataWithPriority = data.todos.map((item: Todo) => ({ ...item, priority: PRIORITY_LEVELS[0] }))
                    dispatch({ type: "SET_TASKS", payload: dataWithPriority });
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        loadTasks();
    }, [dispatch]);
};

export default useFetchTask;
