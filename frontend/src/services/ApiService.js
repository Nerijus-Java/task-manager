import axios from "axios"

const API_BASE_URL = "http://localhost:8080/api";

// Users AUTH
export const registerUser = (userData) => {
    return axios.post(`${API_BASE_URL}/auth/register`,userData)
}

export const loginUser = (credentials) => {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials)
}

//Tasks
export const getTasks = (userId) => {
  return axios.get(`${API_BASE_URL}/tasks/user/${userId}`);
};

export const createTask = (taskData, userId) => {
  return axios.post(`${API_BASE_URL}/tasks/user/${userId}`, taskData);
};
