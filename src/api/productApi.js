import {apiUrl} from '@config/api';
import axios from 'axios';

const getProducts = async options => {
  try {
    const response = await axios.get(`${apiUrl}/products`, {
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

const getProduct = async (id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`, {
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

const addProduct = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/products/add`, data, {
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

const updateProduct = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/products/update`, data, {
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

const deleteProduct = async (id, options) => {
  try {
    const response = await axios.post(
      `${apiUrl}/products/delete`,
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

export const productApi = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
