// components/TodoList.js

import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import api from '../../services/api';



const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch Todos from the API
    api.get('todos').then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
      
        <TodoItem key={todo.id} todo={todo} />
        
      ))}
    </div>
  );
};

export default TodoList;
