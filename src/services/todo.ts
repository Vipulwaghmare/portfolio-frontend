import { TodoInterface } from '../interfaces/todoList/reducer';
import { api } from './instance';

export const fetchTodos = async () => {
  const { data } = await api.get('/api/v1/todo');
  return data;
};

export const addTodo = async (newTodo: TodoInterface) => {
  const { data } = await api.post('/api/v1/todo', newTodo);
  return data;
};

export const updateTodo = async (updatedTodo: Partial<TodoInterface>) => {
  const { data } = await api.put(`/api/v1/todo/${updatedTodo.id}`, updatedTodo);
  return data;
};

export const deleteAllTodos = async () => {
  await api.delete('/api/v1/todo/all');
};

export const deleteTodo = async (id: string) => {
  await api.delete(`/api/v1/todo/${id}`);
  return id;
};