import {Block, Button, DropDown, Header, TextInput} from '@components';
import {Email, Fullname, List, Phone} from '@assets/icons';
import {Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setUser} from 'reduxs/reducers';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {userApi} from 'api/userApi';

const UpdateProfileScreen = ({route, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {
    theme: {theme: themeStore},
    user: {user},
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
          <Block style={styles.group}>
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
