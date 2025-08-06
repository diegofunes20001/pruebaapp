"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TaskStatus = 'Pendiente' | 'En Proceso' | 'Completada';

export interface Task {
  id: string | number;
  titulo: string;
  descripcion: string;
  estado: TaskStatus;
}

interface TaskContextType {
  tasks: Task[];
  updateTaskStatus: (id: string | number, status: TaskStatus) => void;
  deleteTask: (id: string | number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTaskStatus = (id: string | number, status: TaskStatus) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, estado: status } : task
      )
    );
  };

  const deleteTask = (id: string | number) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

function TaskTable(){
  const estados: TaskStatus[] = ['Pendiente', 'En Proceso', 'Completada'];

  const TaskTable = () => {
    const { tasks, updateTaskStatus, deleteTask } = useTaskContext();

    return (
      <table border={1} cellPadding={8} style={{ width: '100%', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Cambiar Estado</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td colSpan={6}>Sin tareas</td>
            </tr>
          )}
          {tasks.map((task: { id: string | number; titulo: string; descripcion: string; estado: TaskStatus }) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.titulo}</td>
              <td>{task.descripcion}</td>
              <td>{task.estado}</td>
              <td>
                <select
                  value={task.estado}
                  onChange={e => updateTaskStatus(task.id, e.target.value as TaskStatus)}
                >
                  {estados.map(e => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

}

export default TaskTable;