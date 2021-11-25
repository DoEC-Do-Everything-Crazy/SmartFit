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

/* Course API */
const getUserCourses = async (params, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/courses/user`,
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

/* Lesson API */
const getCourseLessons = async (params, courseId, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/lessons/user/${courseId}`,
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

/* Step API */
const getLessonSteps = async (params, lessonId, options) => {
  try {
    const response = await axios.get(
      `${apiUrl}/steps/user/${lessonId}`,
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

// // get user course
// setAuthToken(token);
// const response = courseApi.getUserCourses({pageNumber, type});

// // get user course
// setAuthToken(token);
// const response = lessonApi.getCourseLessons({pageNumber}, 'courseId');

// // get user course
// setAuthToken(token);
// const response = courseApi.getLessonSteps({pageNumber}, 'lessonId');

export const courseApi = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseByView,
  getUserCourses,
  getCourseLessons,
  getLessonSteps,
  updateViewCourse,
};
