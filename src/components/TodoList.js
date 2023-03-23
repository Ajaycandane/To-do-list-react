import React, { useState } from 'react';
import Todo from './Todo';

function TodoList({ todos, onDelete, onEdit, onToggle }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onDelete={() => onDelete(index)}
          onEdit={(newTodo) => onEdit(index, newTodo)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;