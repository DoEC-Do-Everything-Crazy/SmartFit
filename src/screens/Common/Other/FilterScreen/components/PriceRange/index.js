import {Block, Text} from '@components';
import {Picker} from '@react-native-picker/picker';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import React, {useEffect, useState} from 'react';

const PriceRange = ({label, value, props}) => {
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  useEffect(() => {}, [amountFrom, amountTo]);
  return (
    <Block paddingTop={20}>
      <Text
        size={16}
        marginLeft={16}
        marginBottom={15}
        color={theme.colors.iconInf}
        fontType="bold">
        Price Range
      </Text>
      <Block row marginHorizontal={16} space="between">
        <Block
          row
          width={170}
          borderRadius={8}
          borderWidth={1}
          borderColor={themeStore === 'dark' ? 'white' : '#EBF0FF'}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor={themeStore === 'dark' ? 'white' : 'blue'}
            selectedValue={amountFrom}
            onValueChange={setAmountFrom}>
            <Picker.Item label="100k" value="100" />
            <Picker.Item label="200k" value="200" />
            <Picker.Item label="300k" value="300" />
          </Picker>
        </Block>
        <Block
          row
          borderRadius={8}
          width={170}
          borderWidth={1}
          borderColor={themeStore === 'dark' ? 'white' : '#EBF0FF'}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor={themeStore === 'dark' ? 'white' : 'blue'}
            selectedValue={amountTo}
            onValueChange={setAmountTo}>
            <Picker.Item label="100k" value="100" />
            <Picker.Item label="200k" value="200" />
            <Picker.Item label="300k" value="300" />
          </Picker>
        </Block>
      </Block>
    </Block>
  );
};

export default PriceRange;
