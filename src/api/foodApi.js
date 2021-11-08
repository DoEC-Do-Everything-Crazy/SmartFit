import {apiUrl} from '@config/api';
import axios from 'axios';

const getFoods = async options => {
  try {
    const response = await axios.get(`${apiUrl}/foods`, {
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

const getFood = async (id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/foods/${id}`, {
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

const addFood = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/foods/add`, data, {
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

const updateFood = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/foods/update`, data, {
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

const deleteFood = async (id, options) => {
  try {
    const response = await axios.post(
      `${apiUrl}/foods/delete`,
      {id},
      {
        ...options,
        validateStatus: false,
      },
    );

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

export const foodApi = {
  getFoods,
  getFood,
  addFood,
  updateFood,
  deleteFood,
};
