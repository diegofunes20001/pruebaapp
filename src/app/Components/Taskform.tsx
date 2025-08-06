"use client";
import { useState } from 'react';

function TaskForm() {
 const [titulo, setTitulo] = useState<string>("");
 const [descripcion, setDescripcion] = useState<string>('');

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    addTask(titulo, descripcion);
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={Submit} >
      <input
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;

function addTask(titulo: any, descripcion: any) {
  throw new Error('Function not implemented.');
}
