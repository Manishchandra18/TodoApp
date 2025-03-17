import axios from "axios";

const API_URL = "http://localhost:5000";

export const registerUser = (userData) => axios.post(⁠ ${API_URL}/users/register ⁠, userData);
export const loginUser = (userData) => axios.post(⁠ ${API_URL}/users/login ⁠, userData);
export const getTodos = (token) => axios.get(⁠ ${API_URL}/todos ⁠, { headers: { Authorization: ⁠ Bearer ${token} ⁠ } });
export const addTodo = (todo, token) => axios.post(⁠ ${API_URL}/todos ⁠, todo, { headers: { Authorization: ⁠ Bearer ${token} ⁠ } });
export const deleteTodo = (id, token) => axios.delete(⁠ ${API_URL}/todos/${id} ⁠, { headers: { Authorization: ⁠ Bearer ${token} ⁠ } });