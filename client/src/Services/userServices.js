import axios from 'axios'

const API = 'http://localhost:3000/api/user'

export const getUser = () => axios.get(API);
export const createUser = (data) => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);