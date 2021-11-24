import {apiUrl} from '@config/api';
import axios from 'axios';

const getPTs = async (params, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/pts`,
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

const getPT = async (id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/pts/${id}`, {
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

const addPT = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/courses/pt/add`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status !== 200) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

const updatePT = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/courses/pt/update`, data, {
      ...options,
      validateStatus: false,
    });

    if (response.status !== 200) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

const deletePT = async (id, options) => {
  try {
    const response = await axios.post(
      `${apiUrl}/courses/pt/delete`,
      {id},
      {
        ...options,
        validateStatus: false,
      },
    );

    if (response.status !== 200) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

export const ptApi = {getPTs, getPT, addPT, updatePT, deletePT};
