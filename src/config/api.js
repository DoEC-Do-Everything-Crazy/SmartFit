import {Platform} from 'react-native';

export const apiUrl =
  Platform.OS === 'ios'
    ? 'http://localhost:5000/api'
    : 'http://10.0.2.2:5000/api';
