import React, { ReactNode, createContext } from 'react';

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({});

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  return (
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