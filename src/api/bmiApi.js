import {apiUrl} from '@config/api';
import axios from 'axios';

const getBMI = async (userId, options) => {
  try {
    const response = await axios.get(`${apiUrl}/bmi/${userId}`, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const addBMI = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/bmi`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBMI = async (data, options) => {
  try {
    const response = await axios.put(`${apiUrl}/bmi`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bmiApi = {
  getBMI,
  addBMI,
  updateBMI,
};
