"use client"; 
import React, { createContext, useState, ReactNode } from "react";
import { TaskProvider } from "../provider/TaskProvider";
// Ensure the file exists at the specified path or update the path if necessary
import TaskForm from "../components/TaskForm";
// import TaskTable from "../components/TaskTable";
import TaskTable from "../components/TaskTable"; // Ensure TaskTable.tsx exists in src/components

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export default function Home() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: 800, margin: '2rem auto' }}>
        <h1>Gestor de Tareas</h1>
        <TaskForm />
        <TaskTable />
      </div>
    </TaskProvider>
  );
}