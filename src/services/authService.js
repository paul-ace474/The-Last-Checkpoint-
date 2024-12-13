import axios from 'axios';

const API_URL = '/api/auth';

export const registerUser = async (formData) => {
  const response = await axios.post(`${API_URL}/register`, formData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
