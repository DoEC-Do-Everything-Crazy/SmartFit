import {Block, Text} from '@components';
import {Picker} from '@react-native-picker/picker';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';

const PriceRange = (label, value) => {
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  useEffect(() => {}, [amountFrom, amountTo]);
  return (
    <Block>
      <Text
        size={16}
        marginLeft={16}
        marginTop={28}
        marginBottom={15}
        color={theme.colors.blue}
        fontType="bold">
        Price Range
      </Text>
      <Block row marginHorizontal={16} space="between">
        <Block
          row
          width={170}
          borderRadius={8}
          borderWidth={1}
          borderColor="#EBF0FF">
          <Picker
            style={{width: 170, color: 'gray'}}
            mode="dropdown"
            dropdownIconColor="blue"
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
          borderColor="#EBF0FF">
          <Picker
            style={{width: 170, color: 'gray'}}
            mode="dropdown"
            dropdownIconColor="blue"
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
