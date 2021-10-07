import {Email, Fullname, Gender, List, Phone} from '@assets/icons';
import {Block, Button, Header, TextInput} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '@theme';

import {Formik} from 'formik';
import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const UpdateProfileScreen = ({route, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const phone = route?.params?.phone;
  const [date, setDate] = useState(new Date());
  const [selectedGender, setSelectedGender] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  var dateFormat = require('dateformat');
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const validationSchema = yup.object().shape({
    fullName: yup.string().required('Fullname is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    phone: yup
      .string()

      .required('Phone number is required'),
  });
  // const color = useMemo(() => {
  //   if (isInput) {
  //     return theme.colors.white;
  //   }
  //   return theme.colors.blue;
  // }, [isInput]);

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
                placeholder="Fullname"
                inputStyle={styles.input}
                leftIcon={true}
                value={values.fullName}
                containerStyle={styles.holderInput}
                onChangeText={handleChange('fullName')}
                onEndEditing={handleBlur('fullName')}>
                <Fullname />
              </TextInput>
              <Block marginTop={8} marginBottom={24}>
                {errors.fullName && touched.fullName && (
                  <Text style={styles.text}>{errors.fullName}</Text>
                )}
              </Block>
              <TextInput
                placeholder="Email"
                inputStyle={styles.input}
                value={values.email}
                leftIcon={true}
                onChangeText={handleChange('email')}
                onEndEditing={handleBlur('email')}>
                <Email />
              </TextInput>
              <Block marginTop={8} marginBottom={24}>
                {errors.email && touched.email && (
                  <Text style={styles.text}>{errors.email}</Text>
                )}
              </Block>
              <TextInput
                placeholder="Phone"
                inputStyle={styles.input}
                leftIcon={true}
                value={'values.phone'}
                onChangeText={handleChange('phone')}
                onEndEditing={handleBlur('phone')}
                disabled="true">
                <Phone />
              </TextInput>
              <Block marginTop={8} marginBottom={24}>
                {errors.phone && touched.phone && (
                  <Text style={styles.text}>{errors.phone}</Text>
                )}
              </Block>
              <Block marginTop={8} marginBottom={24} style={styles.gender}>
                <Gender />
                <Picker
                  style={styles.picker}
                  mode="dropdown"
                  dropdownIconColor="red"
                  selectedValue={selectedGender}
                  onValueChange={setSelectedGender}>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </Block>
              <TouchableOpacity
                style={{marginTop: 8, marginBottom: 24}}
                onPress={showDatepicker}>
                <TextInput
                  disabled={true}
                  placeholder={''}
                  value={dateFormat(date, 'dd/mm/yyyy')}
                  inputStyle={styles.input}
                  leftIcon={true}>
                  <List />
                </TextInput>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                  />
                )}
              </TouchableOpacity>
            </Block>
          </Block>
          <Button
            containerStyle={{justifyContent: 'flex-end'}}
            disabled={dirty && isValid ? false : true}
            title="Update"
            style={styles.button}
            onPress={handleSubmit}
          />
        </Block>
      )}
    </Formik>
  );
};

export default UpdateProfileScreen;
