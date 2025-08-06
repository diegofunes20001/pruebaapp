"use client";
import React, { useState, useContext, createContext, ReactNode } from "react";

export type TaskStatus = "Pendiente" | "En Proceso" | "Completada";

export interface Task {
    id: string;
    titulo: string;
    despcripcion: string;
    estado: TaskStatus;
}

interface TaskContextProps {
    tasks: Task[];
    addTask: (titulo: string, despcripcion: string) => void;
    updateTask: (id: string, estado: TaskStatus) => void;
    deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext debe usarse dentro de TaskProvider');
  }
  return context;
};
