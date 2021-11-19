import {apiUrl} from '@config/api';
import axios from 'axios';
const checkCardList = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/orders/checkCart`, data, {
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

const addOrder = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/orders/createOrder`, data, {
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

const getOrders = async (userId, options) => {
  try {
    const response = await axios.get(`${apiUrl}/orders?userId=${userId}`, {
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
const getOrdersByStatus = async (userId, status, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/orders?userId=${userId}&&status=${status}`,
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

const updateOrder = async (data, options) => {
  try {
    const response = await axios.patch(`${apiUrl}/orders/updateStatus`, data, {
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

export const orderApi = {
  checkCardList,
  addOrder,
  getOrders,
  updateOrder,
  getOrdersByStatus,
};
