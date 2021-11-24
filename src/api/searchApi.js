import {apiUrl} from '@config/api';
import axios from 'axios';

const getDataSearch = async (params, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/search`,
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

export const searchApi = {
  getDataSearch,
};
