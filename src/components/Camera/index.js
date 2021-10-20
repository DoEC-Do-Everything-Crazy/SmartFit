import {icons} from '@assets';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const Camera = ({onPress, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  return (
    <RNCamera
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      captureAudio={false}>
      <Pressable onPress={onPress}>
        <Image source={icons.camera} />
      </Pressable>
    </RNCamera>
  );
};

export default Camera;
