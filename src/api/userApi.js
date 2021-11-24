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

const sendEmail = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/users/sendResetEmail`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response;
  } catch (error) {
    throw error;
  }
};

const checkCode = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/users/checkResetCode`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/users/resetPassword`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response;
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

export const userApi = {
  getUser,
  updateUser,
  sendEmail,
  checkCode,
  resetPassword,
  uploadImage
};
