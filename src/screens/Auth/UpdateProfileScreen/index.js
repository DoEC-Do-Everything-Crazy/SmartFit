import React, {useRef, useState} from 'react';
import {TextInput, Block, Header, Button} from '@components';
import {icons} from '@assets';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Image,
  Text,
  View,
} from 'react-native';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import * as yup from 'yup';
import {Formik} from 'formik';

const UpdateProfileScreen = () => {
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
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
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
        <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
          <Header canGoBack title="Update Profile" />
          <Block height={height / 9} />

          <Block height={height * 0.75}>
            <Block style={styles.group} height={height / 1.5}>
              <TextInput
                placeholder="Fullname"
                inputStyle={styles.input}
                value={values.fullName}
                containerStyle={styles.holderInput}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
              />
              {errors.fullName && touched.fullName && (
                <Text style={styles.text}>{errors.fullName}</Text>
              )}
              <TextInput
                placeholder="Email"
                inputStyle={styles.input}
                value={values.email}
                leftIcon={icons.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.text}>{errors.email}</Text>
              )}
              <TextInput
                placeholder="Phone"
                inputStyle={styles.input}
                leftIcon={icons.phone}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
              {errors.phone && touched.phone && (
                <Text style={styles.text}>{errors.phone}</Text>
              )}
              <Block style={styles.gender}>
                <Image source={icons.gender} style={styles.img} />
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
              <TouchableOpacity onPress={showDatepicker}>
                <TextInput
                  disabled={true}
                  placeholder={''}
                  value={dateFormat(date, 'dd/mm/yyyy')}
                  inputStyle={styles.input}
                  leftIcon={icons.birthday}
                />
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

              <Button
                disabled={dirty && isValid ? false : true}
                title="Update"
                style={styles.button}
                onPress={handleSubmit}
              />
            </Block>
          </Block>
        </Block>
      )}
    </Formik>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  group: {
    justifyContent: 'space-around',
  },
  input: {
    height: 60,
  },
  holderInput: {
    fontSize: 100,
  },
  button: {
    height: 600,
  },
  calendar: {
    flex: 1,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '3%',
    borderColor: theme.colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
  },
  img: {
    height: 14,
    width: 14,
  },
  picker: {
    width: width - 20,
    backgroundColor: 'yellow',
    height: 60,
  },
  text: {
    color: theme.colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
});
