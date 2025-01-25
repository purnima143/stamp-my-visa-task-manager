import { createContext, useContext, useReducer, PropsWithChildren } from 'react';
import { taskReducer, initialState } from '../reducers/taskReducer';
import { TaskAction, TaskState } from '../types';

interface TaskContextType {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskProvider = (): TaskContextType => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTaskProvider must be used within a TaskProvider');
    }

    return context;
};
