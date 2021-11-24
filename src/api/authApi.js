import {apiUrl} from '@config/api';
import axios from 'axios';

const login = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authApi = {login, register};
