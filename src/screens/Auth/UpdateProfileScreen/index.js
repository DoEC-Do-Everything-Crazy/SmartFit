import {Block, Button, DropDown, Header, TextInput} from '@components';
import {Email, Fullname, List, Phone} from '@assets/icons';
import {Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';
import {addUser} from 'reduxs/reducers';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {apiUrl} from '@config/api';

const UpdateProfileScreen = ({route, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const dateFormat = require('dateformat');

  const [userProfile, setUserProfile] = useState({
    birthday: user.birthday,
    phoneNumber: user.phoneNumber,
    displayName: user.displayName,
    email: user.email,
  });

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [valueGender, setValueGender] = useState(user.gender);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
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
    await axios
      .post(`${apiUrl}/user/update`, {
        userProfile: {...userProfile, uid: user.uid, gender: valueGender},
        changePrimary:
          userProfile.email !== user.email ||
          userProfile.phoneNumber !== user.phoneNumber,
      })
      .then(response => {
        if (response.status === 200) {
          const newUser = {
            ...user,
            birthday: userProfile.birthday,
            displayName: userProfile.displayName,
            email: userProfile.email,
            gender: valueGender,
            phoneNumber: userProfile.phoneNumber,
          };

          dispatch(addUser(newUser));
          navigation.goBack();
          return;
        }
        console.log('!= 200', response);
      })
      .catch(error => {
        console.error('load error', error.message);
      });
  };

  const handleOnSubmit = () => {
    updateProfile();
  };

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title="Update Profile" colorTheme={theme.colors.blue} />
      <Block flex paddingTop={20}>
        <Block style={styles.group}>
          <TextInput
            placeholder="Enter full name"
            inputStyle={styles.input}
            leftIcon={true}
            value={userProfile.displayName}
            containerStyle={styles.holderInput}
            onChangeText={text => {
              setUserProfile({
                ...userProfile,
                displayName: text,
              });
            }}>
            <Fullname />
          </TextInput>
          <Block marginTop={8} marginBottom={24}>
            {/* {error.displayName && (
              <Text style={styles.text}>{error.displayName}</Text>
            )} */}
          </Block>
          <TextInput
            placeholder="Enter email"
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
            <Email />
          </TextInput>
          <Block marginTop={8} marginBottom={24}>
            {/* {error.phoneNumber && (
              <Text style={styles.text}>{error.phoneNumber}</Text>
            )} */}
          </Block>
          <TextInput
            placeholder="Enter phone number"
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
            <Phone />
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
            onChangeValue={setValueGender}
            placeholder="Select a gender"
          />
          <TouchableOpacity
            style={{marginTop: 8, marginBottom: 24}}
            onPress={showDatepicker}>
            <TextInput
              disabled={true}
              placeholder="Select date"
              value={dateFormat(userProfile.birthday, 'dd/mm/yyyy')}
              inputStyle={styles.input}
              leftIcon={true}>
              <List color={theme.colors.black} />
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
        <Block justifyEnd>
          <Button
            // containerStyle={{justifyContent: 'flex-end'}}
            title="Update"
            style={styles.button}
            onPress={handleOnSubmit}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default UpdateProfileScreen;
