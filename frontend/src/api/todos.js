// api/todos.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/todos'
});

export const fetchTodos = (filter) => {
  const config = {};
  if (filter !== undefined) {
    config.params = typeof filter === 'object' ? filter : { done: filter };
  }
  return api.get('/', config).then(res => res.data);
};

export const createTodo = (title) =>
  api.post('/', { title }).then(res => res.data);

export const updateTodo = (id, updates) =>
  api.put(`/${id}`, updates).then(res => res.data);

export const deleteTodo = (id) =>
  api.delete(`/${id}`).then(res => res.data);