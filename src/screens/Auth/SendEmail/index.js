import {icons} from '@assets';
import {Block, Header, Text, TextInput} from '@components';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {userApi} from 'api/userApi';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const SendEmail = props => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  const [isSended, setIsSended] = useState(false);
  const [email, setemail] = useState('');

  const handleConfirm = async () => {
    const res = await userApi.sendEmail({email: email});
    if (res.status === 200) {
      setIsSended(true);
      console.log(res.statusText);
      navigation.navigate(routes.VFT_PHONE_NUMBER_SCREEN, {email: email});
    }
  };
  return (
    <Block flex>
      <Header canGoBack title={t('vertifyEmail')} />
      <ScrollView>
        <Block paddingHorizontal={16} marginTop={40}>
          <Block alignCenter>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={icons.sendemail}
            />
          </Block>

          {isSended ? (
            <Block alignCenter marginTop={30}>
              <Text center size={18} fontType="bold" color={theme.colors.blue}>
                {t('confitmEmail')}
              </Text>
              <Block alignCenter>
                <Text size={18}>{t('weSent')}</Text>
                <Text size={18} fontType="bold">
                  {email}
                </Text>
                <Text size={18}>{t('checkEmail')}</Text>
                <Text size={18}>{t('confirmation')}</Text>
              </Block>
              <Pressable width={200}>
                <Text
                  marginTop={15}
                  marginBottom={15}
                  center
                  size={18}
                  fontType="bold"
                  color={theme.colors.blue}>
                  {t('resendEmail')}
                </Text>
              </Pressable>
            </Block>
          ) : (
            <>
              <TextInput
                containerInputStyle={{marginTop: 15}}
                paddingHorizontal={10}
                inputStyle={{flex: 1}}
                placeholder={t('enterEmail')}
                onChangeText={text => setemail(text)}
              />
              <TouchableOpacity onPress={handleConfirm} style={styles.button}>
                <Text color="white" fontType="bold">
                  {t('confirm')}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default SendEmail;
