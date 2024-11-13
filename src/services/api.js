import axios from 'axios';

const API_BASE_URL = 'https://lichess.org/api';

export const getUserProfile = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${username}`);
    console.log('API response:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};
