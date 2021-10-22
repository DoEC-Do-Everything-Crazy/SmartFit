import {apiUrl} from '@config/api';
import axios from 'axios';

const getImages = async options => {
  try {
    const response = await axios.get(`${apiUrl}/images`, options);

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getImage = async (id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/images/${id}`, options);

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const addImage = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/images/add`, data, options);

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

const deleteImage = async (id, options) => {
  try {
    const response = await axios.post(`${apiUrl}/images/delete`, {id}, options);

    if (response.status === 404 || response.status === 500) {
      throw response.data;
    }

    return;
  } catch (error) {
    throw error;
  }
};

export const imageApi = {getImages, getImage, addImage, deleteImage};
