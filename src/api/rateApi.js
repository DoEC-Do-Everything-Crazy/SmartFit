import {apiUrl} from '@config/api';
import axios from 'axios';

const getRates = async (queries, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/rates`,
      {params: queries},
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

const getRecommendedWithRate = async options => {
  try {
    const response = await axios.get(`${apiUrl}/rates/recommended`, {
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

const getRateById = async (type, id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/rates?${type}=${id}`, {
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
const addRateReview = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/rates/WithImage`, data, {
      ...options,
      validateStatus: false,
    });
    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.status;
  } catch (error) {
    throw error;
  }
};

export const rateApi = {
  addRateReview,
  getRateById,
  getRates,
  getRecommendedWithRate,
};
