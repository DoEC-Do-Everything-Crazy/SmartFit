import {icons} from '@assets';
import {Block, Button, Header, TextInput} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import {Formik} from 'formik';
import React, {useState, useMemo} from 'react';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import styles from './styles';

const UpdateProfileScreen = ({route}) => {
  const [isInput, setInput] = useState(true);
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
  const color = useMemo(() => {
    if (isInput) {
      return theme.colors.white;
    }
    return theme.colors.blue;
  }, [isInput]);

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
                leftIcon={icons.fullname}
                value={values.fullName}
                containerStyle={styles.holderInput}
                onChangeText={handleChange('fullName')}
                onEndEditing={handleBlur('fullName')}
              />
              <Block marginTop={8} marginBottom={24}>
                {errors.fullName && touched.fullName && (
                  <Text style={styles.text}>{errors.fullName}</Text>
                )}
              </Block>
              <TextInput
                placeholder="Email"
                inputStyle={styles.input}
                value={values.email}
                leftIcon={icons.email}
                onChangeText={handleChange('email')}
                onEndEditing={handleBlur('email')}
              />
              <Block marginTop={8} marginBottom={24}>
                {errors.email && touched.email && (
                  <Text style={styles.text}>{errors.email}</Text>
                )}
              </Block>
              <TextInput
                placeholder="Phone"
                inputStyle={styles.input}
                leftIcon={icons.phone}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onEndEditing={handleBlur('phone')}
                disabled="true"
              />
              <Block marginTop={8} marginBottom={24}>
                {errors.phone && touched.phone && (
                  <Text style={styles.text}>{errors.phone}</Text>
                )}
              </Block>
              <Block marginTop={8} marginBottom={24} style={styles.gender}>
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
              <TouchableOpacity
                style={{marginTop: 8, marginBottom: 24}}
                onPress={showDatepicker}>
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
