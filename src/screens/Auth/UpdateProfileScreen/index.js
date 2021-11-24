/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, DropDown, Header, TextInput} from '@components';
import {Email, Fullname, List, Phone} from '@assets/icons';
import {Platform, TouchableOpacity, Pressable, Image, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';
import setAuthToken from 'utils/setAuthToken';
import {setUser} from 'reduxs/reducers';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {userApi} from 'api/userApi';
import {icons} from '@assets';
import {addImage, removeImage} from 'reduxs/reducers';
import ImagePicker from 'react-native-image-crop-picker';

const UpdateProfileScreen = ({route, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {
    theme: {theme: themeStore},
    user: {user, token},
    image: {image},
  } = useSelector(state => state.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const dateFormat = require('dateformat');

  const [userProfile, setUserProfile] = useState({
    email: user.email,
    birthday: user.birthday,
    phoneNumber: user.phoneNumber || '',
    fullName: user.fullName,
    photoURL: user.photoURL,
  });

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [valueGender, setValueGender] = useState(user.gender);
  const [gender, setGender] = useState([
    {label: t('male'), value: 'male'},
    {label: t('female'), value: 'female'},
    {label: t('other'), value: 'other'},
  ]);
  const [openGender, setOpenGender] = useState(false);
  const [imageUri, setImageUri] = useState('');
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const updateProfile = async () => {
    try {
      const newUser = {
        fullName: userProfile.fullName,
        birthday: userProfile.birthday,
        phoneNumber: userProfile.phoneNumber,
        gender: valueGender,
      };

      dispatch(removeImage());

      const resData = await userApi.updateUser(newUser);

      dispatch(setUser(resData.data));
      navigation.goBack();
    } catch (error) {
      console.error(error.message);
    }
  };

  const addImageUser = async formData => {
    console.log({formData});
    const res = await userApi.uploadImage(formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch(removeImage());
    dispatch(setUser(res.data));
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

      setImageUri(newImage.uri);
      dispatch(addImage(newImage));
    });
  };

  const handleFormSubmit = () => {
    const formData = new FormData();

    user._id && formData.append('userId', user._id);
    if (image.length !== 0) {
      for (let i = 0; i < image.length; i++) {
        if (image.length - 1 === i) {
          formData.append('images', image[i]);
        }
      }
    } else {
      const newImage = {
        uri: user.photoURL,
        name: new Date().getTime() + '.jpg',
        type: 'image/jpg',
      };
      user.photoURL && formData.append('images', newImage);
    }

    addImageUser(formData);
  };

  const handleOnSubmit = () => {
    updateProfile();
    handleFormSubmit();
  };

  useEffect(() => {
    setAuthToken(token);
    dispatch(removeImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('updateProfile')}
          colorTheme={theme.colors.blue}
        />
        <Block flex paddingTop={20}>
          <Block alignCenter marginRight={16}>
            <Pressable style={styles.camera} onPress={handleGallery}>
              {user.photoURL ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: imageUri ? imageUri : user.photoURL,
                  }}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={{
                    uri: imageUri
                      ? imageUri
                      : 'https://i.pinimg.com/originals/e6/c0/ba/e6c0ba2042e46628276fffc6d4eb26d6.jpg',
                  }}
                />
              )}
              <Block style={styles.title}>
                <Text></Text>
              </Block>
              <Image
                source={icons.camera}
                style={styles.cameraImage}
                ressource={'contain'}
              />
            </Pressable>
          </Block>

          <Block style={styles.group}>
            <Block marginTop={8} marginBottom={24} />
            <TextInput
              label={t('enterFullName')}
              inputStyle={styles.input}
              leftIcon={true}
              value={userProfile.fullName}
              containerStyle={styles.holderInput}
              onChangeText={text => {
                setUserProfile({
                  ...userProfile,
                  fullName: text,
                });
              }}>
              <Fullname color={theme.colors.text} />
            </TextInput>
            <Block marginTop={8} marginBottom={24}>
              {/* {error.fullName && (
                <Text style={styles.text}>{error.fullName}</Text>
              )} */}
            </Block>
            <TextInput
              label={t('enterEmail')}
              inputStyle={styles.input}
              value={userProfile.email}
              leftIcon={true}
              onChangeText={text => {
                setUserProfile({
                  ...userProfile,
                  email: text,
                });
              }}
              disabled={true}>
              <Email color={theme.colors.text} />
            </TextInput>
            <Block marginTop={8} marginBottom={24}>
              {/* {error.phoneNumber && (
                <Text style={styles.text}>{error.phoneNumber}</Text>
              )} */}
            </Block>
            <TextInput
              label={t('enterPhoneNumber')}
              inputStyle={styles.input}
              leftIcon={true}
              value={userProfile.phoneNumber}
              onChangeText={text => {
                setUserProfile({
                  ...userProfile,
                  phoneNumber: text,
                });
              }}>
              <Phone color={theme.colors.text} />
            </TextInput>
            <Block marginTop={8} marginBottom={24}>
              {/* {error.phoneNumber && (
                <Text style={styles.text}>{error.phoneNumber}</Text>
              )} */}
            </Block>
            <DropDown
              open={openGender}
              value={valueGender}
              items={gender}
              setOpen={setOpenGender}
              setValue={setValueGender}
              setItems={setGender}
              containerStyle={styles.gender}
              boxStyle={styles.pickerBox}
              onChangeValue={setValueGender}
              label={t('selectAGender')}
            />
            <TouchableOpacity
              style={{marginTop: 8, marginBottom: 24}}
              onPress={showDatepicker}>
              <TextInput
                disabled={true}
                label={t('selectDate')}
                value={dateFormat(userProfile.birthday, 'dd/mm/yyyy')}
                inputStyle={styles.input}
                leftIcon={true}>
                <List color={theme.colors.text} />
              </TextInput>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date(userProfile.birthday)}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={(event, selectedDay) => {
                    setShow(Platform.OS === 'ios');
                    if (event.type === 'set') {
                      setUserProfile({
                        ...userProfile,
                        birthday: new Date(selectedDay),
                      });
                    }
                  }}
                />
              )}
            </TouchableOpacity>
          </Block>
          <Block flex justifyEnd>
            <Button
              // containerStyle={{justifyContent: 'flex-end'}}
              title={t('update')}
              style={styles.button}
              onPress={handleOnSubmit}
            />
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
