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
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Pressable, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';

import {checkPermission, PERMISSION_TYPE} from '../../../hook';
import {Camera} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import {apiUrl} from '@config/api';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const RateScreen = ({picture, title, group_id, onPress, index, props}) => {
  const [isCamera, setCamera] = useState(false);
  const [comment, setComment] = useState('');
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
  const userId = user.uid;
  const courseId = '615fd5bbc3ee7b269cea854e';
  const productId = '';
  const foodId = '';
  const [rate, setRate] = useState(0);
  const [used, setUsed] = useState(false);
  const formData = new FormData();

  const handleCamera = async () => {
    navigation.navigate(routes.TAKE_PICTURE);
    console.log(image);
  };

  const fetchData = async () => {
    await axios({
      method: 'post',
      url: `${apiUrl}/rates/addWithImage`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      validateStatus: false,
    })
      .then(response => {
        if (response.status === 200) {
          console.log('success');
          return;
        }
        if (response.status === 404 || response.status === 500) {
          console.log('error ' + response.message);
        }
      })
      .catch(error => {
        console.log('error ---> ' + error.message);
      });
  };

  const ratingCompleted = rating => {
    setRate(rating);
  };

  const handleFormSubmit = () => {
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('courseId', courseId);
    formData.append('rate', rate);
    formData.append('content', content);
    formData.append('used', used);
    for (let i = 0; i < image.length; i++) {
      formData.append('images', image[i]);
    }
    fetchData();
    console.log('aaaaaa   ', formData);
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
