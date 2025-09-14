import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='What needs to be done?'
      />
      <button className='todo-btn' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default TodoInput;