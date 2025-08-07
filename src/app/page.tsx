"use client"; 
import React, { createContext, useState, ReactNode } from "react";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";
import TaskProvider from "./TaskProvider";


export default function Home() {
  return (
    <>
      <TaskProvider>
          <h1>Gestor de Tareas</h1>
          <TaskForm />
          <TaskTable />
        
      </TaskProvider>
    </>
  );
}