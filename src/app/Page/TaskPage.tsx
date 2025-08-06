import React, { ReactNode, createContext } from 'react';

interface TaskProviderProps {
  children: ReactNode;
}

// Create the TaskContext
export const TaskContext = createContext({});

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  // You can add context logic here

  return (
    // Provide the context value here
    <TaskContext.Provider value={{}}>
      {children}
    </TaskContext.Provider>
  );
};

type TaskPageProps = {
  Component: React.ComponentType<any>;
  TaskProps?: any;
};

export default function TaskPage ({ Component, TaskProps }: TaskPageProps) {
  return (
    <TaskProvider>
      <Component {...TaskProps} />
    </TaskProvider>
  );
}