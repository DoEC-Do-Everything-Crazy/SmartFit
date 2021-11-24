import {apiUrl} from '@config/api';
import axios from 'axios';

const getFavorites = async (data, options) => {
  try {
    const response = await axios.post(`${apiUrl}/favorites`, data, {
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

// const addFavorite = async (data, options) => {
//   try {
//     const response = await axios.post(`${apiUrl}/favorites/add`, data, {
//       ...options,
//       validateStatus: false,
//     });

//     if (response.status !== 200) {
//       throw response.data;
//     }

//     return;
//   } catch (error) {
//     throw error;
//   }
// };

// const deleteFavorite = async (id, options) => {
//   try {
//     const response = await axios.post(
//       `${apiUrl}/favorites/delete`,
//       {id},
//       {
//         ...options,
//         validateStatus: false,
//       },
//     );

//     if (response.status !== 200) {
//       throw response.data;
//     }

//     return;
//   } catch (error) {
//     throw error;
//   }
// };

export const favoriteApi = {getFavorites};
