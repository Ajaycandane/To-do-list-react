import React, { useState } from 'react';

function InputField(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    props.onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a to-do item"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputField;
