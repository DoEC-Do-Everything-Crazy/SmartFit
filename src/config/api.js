import {Platform} from 'react-native';

export const apiUrl =
  Platform.OS === 'ios'
    ? 'http://localhost:5000/api'
    : 'http://192.168.1.7:5000/api';
