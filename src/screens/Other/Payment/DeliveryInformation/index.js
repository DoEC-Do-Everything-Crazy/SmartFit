import {Block, DropDown, Header, Text, TextInput} from '@components';
import React, {useState} from 'react';

import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';

const DeliveryInformation = ({props}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Block flex>
      <Header canGoBack title="Thêm địa chỉ" />
      <Block flex padding={10}>
        <Text marginHorizontal={16} size={20} fontType="bold">
          Liên hệ
        </Text>
        <Block marginHorizontal={25} marginVertical={10}>
          <TextInput
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder="Họ và tên"
            onChangeText={text => setName(text)}
          />
          <Block marginVertical={15} />
          <TextInput
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder="Số điện thoại"
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
          />
          <Block marginVertical={15} />
          <TextInput
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder="Địa chỉ"
            onChangeText={text => setAddress(text)}
          />
        </Block>
        <Pressable
          onPress={() =>
            navigation.navigate({
              name: 'PAYMENT_SCREEN',
              params: {name: name, phone: phone, address: address},
              merge: true,
            })
          }
          style={styles.button}>
          <Text color="white" fontType="bold">
            Hoàn thành
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default DeliveryInformation;
