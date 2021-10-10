import {Block, Button, Header, TextInput} from '@components';
import {Email, Fullname, Gender, List, Phone} from '@assets/icons';
import {Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {addUser} from 'reduxs/reducers';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const UpdateProfileScreen = ({route, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [userProfile, setUserProfile] = useState({
    birthday: user.birthday,
    phoneNumber: user.phoneNumber,
    displayName: user.displayName,
    email: user.email,
    gender: user.gender,
  });

  const [errors, setErrors] = useState({
    birthday: '',
    phoneNumber: '',
    displayName: '',
    email: '',
    gender: '',
  });

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  var dateFormat = require('dateformat');

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const updateProfile = async () => {
    await axios
      .post('http://10.0.2.2:5000/api/user/update', {
        userProfile: {...userProfile, uid: user.uid},
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
            gender: userProfile.gender,
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
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        fullName: '',
        email: '',
        phone: phone,
      }}
      onSubmit={console.log('Success')}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
        <Block flex backgroundColor={theme.colors.background}>
          <Header
            canGoBack
            title="Update Profile"
            colorTheme={theme.colors.blue}
          />

      <Block flex paddingHorizontal={16}>
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
          <Block marginTop={8} marginBottom={24} style={styles.gender}>
            <Gender />
            <Picker
              style={styles.picker}
              mode="dropdown"
              dropdownIconColor="red"
              selectedValue={userProfile.gender}
              onValueChange={text => {
                setUserProfile({
                  ...userProfile,
                  gender: text,
                });
              }}>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </Block>
          <TouchableOpacity
            style={{marginTop: 8, marginBottom: 24}}
            onPress={showDatepicker}>
            <TextInput
              disabled={true}
              placeholder="Select gender"
              value={dateFormat(new Date(user.birthday), 'dd/mm/yyyy')}
              inputStyle={styles.input}
              leftIcon={true}>
              <List />
            </TextInput>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(user.birthday)}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={selectedDay => {
                  setShow(Platform.OS === 'ios');
                  setUserProfile({
                    ...userProfile,
                    birthday: selectedDay.getTime(),
                  });
                }}
              />
            )}
          </TouchableOpacity>
        </Block>
      </Block>
      <Button
        containerStyle={{justifyContent: 'flex-end'}}
        title="Update"
        style={styles.button}
        onPress={handleOnSubmit}
      />
    </Block>
  );
};

export default UpdateProfileScreen;
