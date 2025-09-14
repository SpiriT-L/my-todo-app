import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [displayedTodos, setDisplayedTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setDisplayedTodos(updatedTodos);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>My To-Do</h1>
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoFilters 
          todos={todos} 
          onFilteredTodosChange={setDisplayedTodos} 
        />
        <TodoList 
          todos={displayedTodos}
          setTodos={setTodos}
          setDisplayedTodos={setDisplayedTodos}
        />
      </div>
    </div>
  );
};

export default App;
