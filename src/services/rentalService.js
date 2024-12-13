import axios from 'axios';

const API_URL = '/api/rentals';

export const getRentals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
