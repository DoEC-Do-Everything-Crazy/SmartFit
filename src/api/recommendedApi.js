import {apiUrl} from '@config/api';
import axios from 'axios';

const getAvgRate = async options => {
  try {
    const response = await axios.get(`${apiUrl}/recommended/`, {
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

const getRecommend = async options => {
  try {
    const response = await axios.get(`${apiUrl}/recommended/myRecommend`, {
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

const getFoodsByBMI = async (bmi, food, options) => {
  try {
    const response = await axios.get(`${apiUrl}/recommended/${bmi}/${food}`, {
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

export const recommendedApi = {
  getRecommend,
  getAvgRate,
  getFoodsByBMI,
};
