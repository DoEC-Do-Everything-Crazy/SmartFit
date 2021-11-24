/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, DropDown, Header, TextInput, Text} from '@components';
import {Email, Fullname, List, Phone} from '@assets/icons';

import {ScrollView, TouchableOpacity, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
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

const UpdateProfileScreen = ({route, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {
    theme: {theme: themeStore},
    user: {user, token},
  } = useSelector(state => state.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const dateFormat = require('dateformat');

  const [userProfile, setUserProfile] = useState({
    email: user.email,
    birthday: user.birthday,
    phoneNumber: user.phoneNumber || '',
    fullName: user.fullName,
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

  const showMode = currentMode => {
    setShow(!show);
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

      const resData = await userApi.updateUser(newUser);

      dispatch(setUser(resData.data));
      navigation.goBack();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleOnSubmit = () => {
    updateProfile();
  };

  useEffect(() => {
    setAuthToken(token);
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
        <ScrollView>
          <Block flex alignCenter paddingTop={20}>
            <Block alignCenter marginRight={16}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://i.pinimg.com/originals/e6/c0/ba/e6c0ba2042e46628276fffc6d4eb26d6.jpg',
                }}
              />
              <Block style={styles.title}>
                <Text />
              </Block>
              <Pressable style={styles.camera}>
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
                disabled={userProfile.email && true}>
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
                value={user.phoneNumber}
                onChangeText={text => {
                  setUserProfile({
                    ...userProfile,
                    phoneNumber: text,
                  });
                }}
                disabled={userProfile.phoneNumber && true}>
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
                <Block
                  column
                  paddingLeft={10}
                  radius={8}
                  backgroundColor={'white'}>
                  <Text paddingTop={5}>{t('selectDate')}</Text>
                  <Block paddingTop={5} paddingBottom={10} row alignCenter>
                    <List color={theme.colors.text} />
                    <Text paddingLeft={10}>
                      {userProfile.birthday
                        ? dateFormat(userProfile.birthday, 'dd/mm/yyyy')
                        : 'dd/mm/yyyy'}
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
              {show && (
                <>
                  <Pressable onPress={showDatepicker}>
                    <Block width={80} radius={8} backgroundColor={'#045694'}>
                      <Text
                        center
                        paddingVertical={5}
                        fontType="bold"
                        color="white">
                        {t('choose')}
                      </Text>
                    </Block>
                  </Pressable>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date(userProfile.birthday)}
                    mode={mode}
                    is24Hour={true}
                    display="spinner"
                    onChange={(event, selectedDay) => {
                      if (event.type !== 'set') {
                        setUserProfile({
                          ...userProfile,
                          birthday: new Date(selectedDay),
                        });
                      }
                    }}
                  />
                </>
              )}
            </Block>
          </Block>
        </ScrollView>
        <Button
          title={t('update')}
          style={styles.button}
          onPress={handleOnSubmit}
        />
      </Block>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
