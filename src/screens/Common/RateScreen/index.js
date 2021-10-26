import {
  Block,
  Button,
  Header as HeaderComponent,
  Text,
  Camera as CameraComponent,
  TextInput,
} from '@components';

import Header from './Header';
import {Image, Pressable, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';

import {Camera} from '@assets/icons';
import {Rating} from 'react-native-ratings';

import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const RateScreen = ({picture, title, group_id, onPress, index, props}) => {
  const modalizRef = useRef(null);
  const [isCamera, setCamera] = useState(false);
  const [comment, setComment] = useState('');
  const {t} = useTranslation();
  const handleCloseCamera = async () => {
    setCamera(false);
  };
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const handleCamera = async () => {
    // const resultSP = await checkPermission(PERMISSION_TYPE.camera);
    // console.log('click');
    // if (resultSP === true) {
    setCamera(true);
    // }
  };

  return (
    <Block flex>
      {isCamera ? (
        <Block>
          <Block style={styles.header}>
            <Header onPress={handleCloseCamera} />
          </Block>
          <CameraComponent />
        </Block>
      ) : (
        <>
          <HeaderComponent
            canGoBack
            title={t('ratting')}
            colorTheme={theme.colors.blue}
          />
          <Block backgroundColor={theme.colors.backgroundSetting}>
            <Block paddingVertical={15}>
              <Text center fontType="bold" size={16}>
                {t('whatIsYouRate')}
              </Text>
            </Block>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={36}
              ratingBackgroundColor="#c8c7c8"
              tintColor={theme.colors.backgroundSetting}
              ratingColor="#FFD700"
            />
          </Block>
          <Block
            paddingVertical={15}
            alignCenter
            backgroundColor={theme.colors.backgroundSetting}>
            <Block width="60%">
              <Text center fontType="bold" size={16}>
                {t('pleaseShare')}
              </Text>
            </Block>
          </Block>
          <Block
            paddingHorizontal={16}
            backgroundColor={theme.colors.backgroundSetting}>
            <TextInput
              onChangeText={() => setComment(comment)}
              value={comment}
              inputStyle={styles.textInput}
              multiline={true}
            />
          </Block>
          <Block
            padding={16}
            marginTop={15}
            backgroundColor={theme.colors.backgroundSetting}>
            <ScrollView horizontal>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
                }}
                height="100%"
                style={styles.image}
              />
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
                }}
                height="100%"
                style={styles.image}
              />
              <Block
                backgroundColor={theme.colors.border}
                justifyCenter
                alignCenter
                style={styles.image}>
                <Pressable onPress={handleCamera}>
                  <Camera />
                </Pressable>
                <Text paddingVertical={5} center fontType="bold" size={12}>
                  {t('addYourPhotos')}
                </Text>
              </Block>
            </ScrollView>
          </Block>
          <Block style={styles.button}>
            <Button
              title={t('sendReview')}
              onPress={() => console.log('click')}
            />
          </Block>
        </>
      )}
    </Block>
  );
};

export default RateScreen;
