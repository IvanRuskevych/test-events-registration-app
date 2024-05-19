import axios from 'axios';

export const instance = axios.create({
  // baseURL: 'https://test-events-registration-backend.onrender.com/api/',
  baseURL: 'http://localhost:8080/api',
});
