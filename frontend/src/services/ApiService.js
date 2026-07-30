import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// -------------------- AUTH --------------------

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

// -------------------- USERS --------------------

export const getCurrentUser = () => {
  return axios.get(`${API_BASE_URL}/users/me`, {
    headers: getAuthHeader(),
  });
};

// -------------------- TASKS --------------------

export const getMyTasks = () => {
  return axios.get(`${API_BASE_URL}/tasks/my-tasks`, {
    headers: getAuthHeader(),
  });
};

export const getCompanyTasks = () => {
  return axios.get(`${API_BASE_URL}/tasks/company`, {
    headers: getAuthHeader(),
  });
};

export const createPersonalTask = (taskData) => {
  return axios.post(`${API_BASE_URL}/tasks/my-tasks`, taskData, {
    headers: getAuthHeader(),
  });
};

export const assignTaskToWorker = (workerId, taskData) => {
  return axios.post(`${API_BASE_URL}/tasks/assign/${workerId}`, taskData, {
    headers: getAuthHeader(),
  });
};

export const updateTaskStatus = (taskID, newStatus) => {
  return axios.patch(
    `${API_BASE_URL}/tasks/${taskID}/status`,
    { status: newStatus },
    {
      headers: getAuthHeader(),
    }
  );
};

export const deleteTask = (taskID) => {
  return axios.delete(`${API_BASE_URL}/tasks/${taskID}`, {
    headers: getAuthHeader(),
  });
};

// -------------------- COMPANIES --------------------

export const getCoworkers = () => {
  return axios.get(`${API_BASE_URL}/companies/coworkers`, {
    headers: getAuthHeader(),
  });
};

export const createCompany = (companyName) => {
  return axios.post(
    `${API_BASE_URL}/companies/create`,
    { companyName },
    {
      headers: getAuthHeader(),
    }
  );
};

export const joinCompany = (companyCode) => {
  return axios.put(
    `${API_BASE_URL}/companies/join`,
    { companyCode },
    {
      headers: getAuthHeader(),
    }
  );
};

export const promoteToManager = (workerId) => {
  return axios.patch(`${API_BASE_URL}/companies/promote/${workerId}`, {}, {
    headers: getAuthHeader(),
  });
};

export const demoteManager = (managerId) => {
  return axios.patch(`${API_BASE_URL}/companies/demote/${managerId}`, {}, {
    headers: getAuthHeader(),
  });
};

export const fireAndBlacklistUser = (workerId) => {
  return axios.post(`${API_BASE_URL}/companies/fire/${workerId}`, {}, {
    headers: getAuthHeader(),
  });
};

export const getBlacklistedUsers = () => {
  return axios.get(`${API_BASE_URL}/companies/blacklist`, {
    headers: getAuthHeader(),
  });
};

export const unbanUser = (userId) => {
  return axios.delete(`${API_BASE_URL}/companies/blacklist/${userId}`, {
    headers: getAuthHeader(),
  });
};