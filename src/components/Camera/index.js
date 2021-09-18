import {Text} from '@components';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const Camera = ({picture, title, text}) => {
  return (
    <RNCamera
      style={styles.camera}
      type={'back'}
      flashMode={'auto'}
      captureAudio={false}
    />
  );
};

export default Camera;
