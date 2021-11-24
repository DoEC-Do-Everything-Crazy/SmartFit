import {apiUrl} from '@config/api';
import axios from 'axios';

const getRecommend = async options => {
  try {
    const response = await axios.get(`${apiUrl}/recommended/myRecommend`, {
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

export const recommendedApi = {
  getRecommend,
};
