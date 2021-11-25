import {apiUrl} from '@config/api';
import axios from 'axios';

const checkCartList = async (data, options) => {
  try {
    console.log('checkCartList');
    const response = await axios.post(`${apiUrl}/orders/checkCart`, data, {
      ...options,
      validateStatus: false,
    });

    console.log({response});

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const addOrder = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/orders`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status !== 200) {
      throw response.data;
    }

    return response;
  } catch (error) {
    throw error;
  }
};

const getOrders = async (params, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/orders/myOrder`,
      {params},
      {
        ...options,
        validateStatus: false,
      },
    );

    if (response.status !== 200) {
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

    if (response.status !== 200) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const cancelOrder = async (data, options) => {
  try {
    const response = await axios.put(`${apiUrl}/orders/cancelOrder`, data, {
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

export const orderApi = {
  checkCartList,
  addOrder,
  getOrders,
  getOrdersByStatus,
  cancelOrder,
};
