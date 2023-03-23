import React, { useState } from 'react';

function Todo({ todo, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(newTodo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTodo(todo);
  };

  const handleToggle = () => {
    onToggle();
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSave();
            } else if (event.key === 'Escape') {
              handleCancel();
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Todo;