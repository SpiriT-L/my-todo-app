import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div className='App'>
      <h1>My To-Do</h1>
      <form onSubmit={handleAddTodo}>
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

      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id} className='todo-item'>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
