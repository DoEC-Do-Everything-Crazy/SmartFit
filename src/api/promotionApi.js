import {apiUrl} from '@config/api';
import axios from 'axios';

const getPromotionByUserID = async (userID, options) => {
  try {
    const response = await axios.get(`${apiUrl}/promotion/${userID}`, {
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

export const promotionApi = {
  getPromotionByUserID,
};
