import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // eslint-disable-next-line dot-notation
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
