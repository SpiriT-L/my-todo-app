import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo }) => {
  const handleToggle = () => {
    onToggleComplete(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div className='todo-content'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={handleToggle}
          className='todo-checkbox'
        />
        <span onClick={handleToggle}>{todo.text}</span>
        <button onClick={handleDelete} className='delete-btn'>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
