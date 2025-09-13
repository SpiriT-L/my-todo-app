import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

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

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <h1>My To-Do</h1>
      <form className='form' onSubmit={handleAddTodo}>
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
      <div className='filters'>
        {filterOptions.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`filter-btn ${filter === value ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span onClick={() => handleToggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className='delete-btn'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
