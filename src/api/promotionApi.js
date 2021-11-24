import {apiUrl} from '@config/api';
import axios from 'axios';

const getPromotionByUserID = async (userID, value, options) => {
  try {
    const response = await axios.get(`${apiUrl}/promotion/${userID}/${value}`, {
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

const getPromotionByKey = async (key, options) => {
  try {
    const response = await axios.get(`${apiUrl}/promotion/check/${key}`, {
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

export const promotionApi = {
  getPromotionByUserID,
  getPromotionByKey,
};
