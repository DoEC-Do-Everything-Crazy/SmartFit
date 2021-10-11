import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const config = {
  apiKey: 'AIzaSyA_p66NRodHQ7WRirlOfSFPFd8q5MynWeU',
  authDomain: 'doec-8dbce.firebaseapp.com',
  projectId: 'doec-8dbce',
  storageBucket: 'doec-8dbce.appspot.com',
  messagingSenderId: '879619453458',
  appId: '1:879619453458:web:c9478ef7bf850ab434decb',
  measurementId: 'G-13QLRHN60H',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default () => {
  return {firebase, auth};
};
