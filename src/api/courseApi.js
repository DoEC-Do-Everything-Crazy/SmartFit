import {apiUrl} from '@config/api';
import axios from 'axios';

const getCourses = async (params, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/courses`,
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

const getCourse = async (id, options) => {
  try {
    const response = await axios.get(`${apiUrl}/courses/${id}`, {
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

const addCourse = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/courses/add`, data, {
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

const updateCourse = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/courses/update`, data, {
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

const deleteCourse = async (id, options) => {
  try {
    const response = await axios.post(
      `${apiUrl}/courses/delete`,
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

const getCourseByView = async (view, options) => {
  try {
    const response = await axios.get(`${apiUrl}/courses/views`, {
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

const updateViewCourse = async (id, options) => {
  try {
    const response = await axios.post(
      `${apiUrl}/courses/updateViewCourse/${id}`,
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

export const courseApi = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseByView,
  updateViewCourse,
};
