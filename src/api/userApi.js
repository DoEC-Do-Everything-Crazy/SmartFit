import {apiUrl} from '@config/api';
import axios from 'axios';

const getUser = async options => {
  try {
    const response = await axios.get(`${apiUrl}/loadUser`, {
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

const updateUser = async (data, options) => {
  try {
    const response = await axios.put(`${apiUrl}/users`, data, {
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

const uploadImage = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/users/uploadImageUser`, data, {
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

export const userApi = {getUser, updateUser, uploadImage};
