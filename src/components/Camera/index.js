import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';

import {Block} from '@components';
import {CameraTouch} from '@assets/icons';
import {RNCamera} from 'react-native-camera';
import {useStyles} from './styles';
import {routes} from '@navigation/routes';
import {addImage, removeImage} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';

const Camera = ({onPress, props, screen}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [pausePreview, setPausePreview] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  const takePicture = async function (camera) {
    const options = {quality: 1};
    const data = await camera.takePictureAsync(options);

    const source = data.uri;

    if (source) {
      await camera.pausePreview();
      setImageSource(source);
      setPausePreview(true);
    }
  };

  const resumePicture = async function (camera, get) {
    if (get) {
      const newImage = {
        uri: imageSource,
        name: new Date().getTime() + '.jpg',
        type: 'image/jpg',
      };
      dispatch(removeImage());
      dispatch(addImage(newImage));
      navigation.navigate(screen);
    }

    await camera.resumePreview();
    setPausePreview(false);
  };

  return (
    <RNCamera
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      captureAudio={false}>
      {({camera, status, recordAudioPermissionStatus}) => {
        if (status !== 'READY') {
          return (
            <Block
              style={{
                flex: 1,
                backgroundColor: 'lightgreen',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Waiting</Text>
            </Block>
          );
        } else {
          return (
            <>
              {pausePreview ? (
                <Block row>
                  <Pressable
                    style={styles.buttonLeft}
                    onPress={() => resumePicture(camera, true)}>
                    <CameraTouch color={theme.colors.green} />
                  </Pressable>
                  <Pressable
                    style={styles.buttonRight}
                    onPress={() => resumePicture(camera, false)}>
                    <CameraTouch color={theme.colors.red} />
                  </Pressable>
                </Block>
              ) : (
                <>
                  <Pressable
                    style={styles.button}
                    onPress={() => takePicture(camera)}>
                    <CameraTouch color={theme.colors.white} />
                  </Pressable>
                </>
              )}
            </>
          );
        }
      }}
    </RNCamera>
  );
};

export default Camera;
