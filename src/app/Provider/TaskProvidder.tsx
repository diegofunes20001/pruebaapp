"use client";
import React, { useState } from "react";

type TaskStatus = 'Pendiente' | 'En Progreso' | 'Completada';

type Task = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: TaskStatus;
};

export default function TaskProvider() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addTask = (titulo: string, descripcion: string) => {
    const newTask: Task = {
      id: nextId,
      titulo,
      descripcion,
      estado: 'Pendiente'
    };
    setTasks((prev: Task[]) => [...prev, newTask]);
    setNextId((prev: number) => prev + 1);
  };

  const updateTaskStatus = (id: number, estado: TaskStatus) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === id ? { ...task, estado } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev: Task[]) => prev.filter((task: Task) => task.id !== id));
  };

  const value = {
    tasks,
    addTask,
    updateTaskStatus,
    deleteTask
  };

  return null;
}