import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, setDisplayedTodos }) => {
  const handleToggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    setDisplayedTodos(updatedTodos);
  };

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setDisplayedTodos(updatedTodos);
  };

  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;