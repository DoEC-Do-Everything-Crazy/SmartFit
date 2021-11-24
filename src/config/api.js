import {Platform} from 'react-native';

const mode = 'development';

export const apiUrl =
  mode === 'development'
    ? Platform.OS === 'ios'
      ? 'http://localhost:5000/api'
      : 'http://10.0.2.2:5000/api'
    : 'https://smartfitbe.herokuapp.com/api';
