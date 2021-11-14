import {Block, Button, Header, Text, TextInput} from '@components';
import {Image, Pressable, ScrollView} from 'react-native';
import {PERMISSION_TYPE, checkPermission} from '../../../hook';
import React, {useState} from 'react';
import {addImage, removeImage} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {Camera} from '@assets/icons';
import ImagePicker from 'react-native-image-crop-picker';
import {Rating} from 'react-native-ratings';
import {icons} from '@assets';
import {rateApi} from 'api/rateApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

const RateScreen = ({route, props}) => {
  const {item} = route.params;
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
  const [rate, setRate] = useState(5);
  const courseId = item.courseId || null;
  const productId = item.productId || null;
  const foodId = item.foodId || null;

  const handleCamera = async () => {
    const resultSP = await checkPermission(PERMISSION_TYPE.camera);
    if (resultSP === true) {
      navigation.navigate(routes.TAKE_PICTURE);
    }
  };

  const handleGallery = () => {
    // dispatch(removeImage());
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(images => {
      const newImage = {
        uri: images.path,
        name: new Date().getTime() + '.jpg',
        type: 'image/jpg',
      };
      dispatch(addImage(newImage));
    });
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
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('ratting')}
          colorTheme={theme.colors.black}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block paddingVertical={15} marginTop={5}>
            <Text center fontType="bold" size={16}>
              {t('whatIsYouRate')}
            </Text>

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
              label="Enter comment"
              multiline={true}
            />
          </Block>
          <Block
            padding={16}
            marginTop={15}
            backgroundColor={theme.colors.backgroundSetting}>
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
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
                <Pressable onPress={handleGallery}>
                  <Image
                    style={{
                      tintColor: themeStore === 'dark' ? 'white' : 'blue',
                    }}
                    source={icons.gallery}
                  />
                </Pressable>
                <Text paddingVertical={5} center fontType="bold" size={12}>
                  {t('choosePhoto')}
                </Text>
              </Block>
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
        </ScrollView>
        <Block style={styles.button}>
          <Button title={t('sendReview')} onPress={handleFormSubmit} />
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default RateScreen;
