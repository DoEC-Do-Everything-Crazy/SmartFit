import {icons} from '@assets';
import {Block, Button, Header, TextInput} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import styles from './styles';

const UpdateProfileScreen = ({route}) => {
  const {phone} = route.params;
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
                disabled="true"
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
