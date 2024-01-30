// services/api.js

import axios from 'axios';

const apiUrl = 'https://localhost:7217/swagger/index.html'; // Replace with your actual API URL

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
