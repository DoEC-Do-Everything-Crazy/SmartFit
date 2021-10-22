import {apiUrl} from '@config/api';
import axios from 'axios';

const getUser = async options => {
  try {
    const response = await axios.post(
      `${apiUrl}/users`,
      {},
      {
        ...options,
        validateStatus: false,
      },
    );

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/users/update`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

export const userApi = {getUser, updateUser};
