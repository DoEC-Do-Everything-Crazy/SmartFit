import {CameraTouch} from '@assets/icons';
import React, {useRef} from 'react';
import {Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Camera = ({onPress, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const cameraRef = useRef();
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  return (
    <RNCamera
      ref={cameraRef}
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      captureAudio={false}>
      <Pressable onPress={onPress}>
        <CameraTouch color={theme.colors.white} />
      </Pressable>
    </RNCamera>
  );
};

export default Camera;
