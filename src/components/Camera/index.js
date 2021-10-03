import {icons} from '@assets';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const Camera = ({onPress}) => {
  return (
    <RNCamera
      style={styles.camera}
      type={'back'}
      flashMode={'auto'}
      captureAudio={false}>
      <Pressable onPress={onPress}>
        <Image source={icons.camera} />
      </Pressable>
    </RNCamera>
  );
};

export default Camera;
