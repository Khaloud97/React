// components/TodoItem.js

import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
