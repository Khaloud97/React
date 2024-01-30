// components/CreateTodo.js

import React, { useState } from 'react';
import api from '../../services/api';

const CreateTodo = ({ onCreate }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleCreateTodo = async () => {
    try {
      // Perform any necessary validation before creating the ToDo
      if (todoText.trim() === '') {
        alert('Todo text cannot be empty!');
        return;
      }

      // Call the API to create the ToDo using Axios
      const response = await api.post('todos', { text: todoText, completed: false });

      // Notify the parent component about the creation
      onCreate(response.data);

      // Clear the input field after creating the ToDo
      setTodoText('');
    } catch (error) {
      console.error('Error creating ToDo:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Todo</h2>
      <div>
        <label htmlFor="todoText">Todo Text:</label>
        <input
          type="text"
          id="todoText"
          value={todoText}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleCreateTodo}>Create Todo</button>
    </div>
  );
};

export default CreateTodo;
