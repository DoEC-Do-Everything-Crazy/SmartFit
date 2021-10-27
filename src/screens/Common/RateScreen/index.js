import {Camera} from '@assets/icons';
import {
  Block,
  Button,
  Header as HeaderComponent,
  Text,
  TextInput,
} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';
import {rateApi} from 'api/rateApi';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Pressable, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';

import {checkPermission, PERMISSION_TYPE} from '../../../hook';
import {Camera} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from 'reduxs/reducers';
import {useStyles} from './styles';

const RateScreen = ({props}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    image: {image},
    user: {user},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const courseId = '615fd5bbc3ee7b269cea854e';
  const productId = '';
  const foodId = '';
  const [rate, setRate] = useState(5);

  const handleCamera = async () => {
    navigation.navigate(routes.TAKE_PICTURE);
    console.log(image);
  };
  const addRate = async formData => {
    const res = await rateApi.addRateReview(formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (res === 200) {
      console.log('add rate success');
      dispatch(removeImage());
      navigation.navigate(routes.ORDER_SCREEN);
    }
  };

  const ratingCompleted = rating => {
    setRate(rating);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append('userId', user.uid);
    formData.append('productId', productId);
    formData.append('courseId', courseId);
    formData.append('foodId', foodId);
    formData.append('rate', rate);
    formData.append('content', content);

    for (let i = 0; i < image.length; i++) {
      formData.append('images', image[i]);
    }
    addRate(formData);
  };

  return (
    <Block flex>
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
            startingValue={5}
            imageSize={36}
            onFinishRating={ratingCompleted}
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
            onChangeText={text => setContent(text)}
            value={content}
            inputStyle={styles.textInput}
            placeholder="Enter comment"
            multiline={true}
          />
        </Block>
        <Block
          padding={16}
          marginTop={15}
          backgroundColor={theme.colors.backgroundSetting}>
          <ScrollView horizontal>
            {image.map((item, index) => (
              <Image
                source={{
                  uri: image[index].uri,
                }}
                height="100%"
                style={styles.image}
              />
            ))}

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
          <Button title={t('sendReview')} onPress={handleFormSubmit} />
        </Block>
      </>
    </Block>
  );
};

export default RateScreen;
