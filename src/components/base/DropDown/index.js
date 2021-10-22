import {ArrowDown, ArrowUp, Tick} from '@assets/icons';
import {getSize, width} from '@utils/responsive';

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import {makeStyles} from '@theme';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const DropDown = ({
  onChangeValue,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  containerStyle,
  boxStyle,
  placeholder,
  props,
}) => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  DropDownPicker.addTranslation('TRANS', {
    PLACEHOLDER: placeholder,
    SEARCH_PLACEHOLDER: 'Type something ... ',
    SELECTED_ITEMS_COUNT_TEXT: '{count} items have been selected',
    NOTHING_TO_SHOW: 'There is nothing to show!',
  });
  DropDownPicker.setLanguage('TRANS');
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={10000}
      zIndexInverse={30000}
      onChangeValue={onChangeValue}
      scrollViewProps={{
        decelerationRate: 'fast',
      }}
      modalProps={{
        animationType: 'fade',
      }}
      listMode="SCROLLVIEW"
      style={[styles.picker, containerStyle]}
      textStyle={styles.pickerText}
      dropDownContainerStyle={[styles.pickerBox, boxStyle]}
      ArrowDownIconComponent={({style}) => (
        <ArrowDown color={theme.colors.text} style={style} />
      )}
      ArrowUpIconComponent={({style}) => (
        <ArrowUp
          color={theme.colors.text}
          width={10}
          height={10}
          style={style}
        />
      )}
      TickIconComponent={({style}) => <Tick style={style} />}
    />
  );
};

const useStyles = makeStyles()(({colors}) => ({
  picker: {
    height: getSize.m(45),
    backgroundColor: colors.inputText,
    borderColor: colors.inputText,
    width: width - 30,
    borderRadius: 8,
    marginLeft: getSize.s(16),
    paddingRight: getSize.s(16),
  },
  pickerBox: {
    backgroundColor: colors.inputText,
    borderWidth: 0,
    borderRadius: 8,
    width: width - 30,
    marginLeft: getSize.s(16),
  },
  pickerText: {
    color: colors.text,
    // fontSize: font.size.body,
    // fontFamily: 'Aeonik-Regular',
  },
}));
export default DropDown;
