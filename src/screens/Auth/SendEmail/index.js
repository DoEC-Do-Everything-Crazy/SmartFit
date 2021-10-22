import {icons} from '@assets';
import {Block, Header, Text} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';

const SendEmail = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header canGoBack title="Vertify email" />
      <Block
        paddingHorizontal={16}
        alignCenter
        marginTop={40}
        backgroundColor={theme.colors.white}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={icons.sendemail}
        />
        <Block alignCenter>
          <Text
            center
            size={18}
            paddingVertical={10}
            fontType="bold"
            color={theme.colors.blue}>
            {t('confitmEmail')}
          </Text>
          <Block alignCenter paddingVertical={10}>
            <Text size={18}>{t('weSent')}</Text>
            <Text size={18} fontType="bold">
              congkhanh2424@gmail.com
            </Text>
            <Text size={18}>{t('checkEmail')}</Text>
            <Text size={18}>{t('confirmation')}</Text>
          </Block>
          <Pressable width={200} backgroundColor={theme.colors.white}>
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
      </Block>
    </Block>
  );
};

export default SendEmail;
