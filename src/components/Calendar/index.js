import {icons} from '@assets';
import {TextInput} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const Calendar = ({testID, value, is24Hour, display, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
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
  return (
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
  );
};

export default Calendar;
