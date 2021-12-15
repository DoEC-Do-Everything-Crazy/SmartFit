import {Block, Header, Text, TextInput} from '@components';
import React, {useState} from 'react';

import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

const DeliveryInformation = ({props}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);

  const [name, setName] = useState(user.fullName);
  const [phone, setPhone] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Header canGoBack title={t('addAddress')} />
      <Block flex padding={10}>
        <Text marginHorizontal={16} size={20} fontType="bold">
          {t('contact')}
        </Text>
        <Block marginHorizontal={25} marginVertical={10}>
          <TextInput
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder={t('fullName')}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Block marginVertical={15} />
          <TextInput
            value={phone}
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder={t('phoneNumber')}
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
          />
          <Block marginVertical={15} />
          <TextInput
            value={address}
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            placeholder={t('address')}
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
    </SafeAreaView>
  );
};

export default DeliveryInformation;
