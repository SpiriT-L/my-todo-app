import React, { useState } from 'react';

const TodoFilters = ({ todos, onFilteredTodosChange }) => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  const handleFilterChange = (value) => {
    setCurrentFilter(value);
    
    const filteredTodos = todos.filter(todo => {
      if (value === 'active') return !todo.completed;
      if (value === 'completed') return todo.completed;
      return true;
    });
    
    onFilteredTodosChange(filteredTodos);
  };

  return (
    <div className='filters'>
      {filterOptions.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => handleFilterChange(value)}
          className={`filter-btn ${currentFilter === value ? 'active' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;