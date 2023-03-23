import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([ 
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      const newTodo = {
        text: inputValue,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEditTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <div
              className="todo-text"
              style={{
                textDecoration: todo.isCompleted ? "line-through" : ""
              }}
            >
              {todo.text}
            </div>
            <div className="todo-actions">
              <button onClick={() => handleCompleteTodo(index)}>
                {todo.isCompleted ? "Incomplete" : "Complete"}
              </button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              <button onClick={() => handleEditTodo(index, todo.text)}>
                Edit
              </button>
            </div>
          </div>
        ))}
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add a todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}