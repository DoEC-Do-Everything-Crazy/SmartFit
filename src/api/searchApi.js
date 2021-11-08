import {apiUrl} from '@config/api';
import axios from 'axios';

const getDataSearch = async (name, page, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/search?name=${name}&page=${page}`,
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

export const searchApi = {
  getDataSearch,
};
