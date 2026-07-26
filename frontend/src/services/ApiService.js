import axios from "axios"

const API_BASE_URL = "http://localhost:8080/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Users AUTH

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/auth/register`, userData)
}

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials)
}

//Tasks
export const getTasks = (userId) => {
  return axios.get(`${API_BASE_URL}/tasks/user/${userId}`, {
    headers: getAuthHeader()
  });
};

export const createTask = (taskData, userId) => {
  return axios.post(`${API_BASE_URL}/tasks/user/${userId}`, taskData, {
    headers: getAuthHeader()
  });
};
