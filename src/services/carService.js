import axios from 'axios';

const API_URL = '/api/cars';

// Existing functions
export const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createCar = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Purchase a car
export const purchaseCar = async (id, purchaseData) => {
  const response = await axios.post(`${API_URL}/${id}/purchase`, purchaseData);
  return response.data;
};
