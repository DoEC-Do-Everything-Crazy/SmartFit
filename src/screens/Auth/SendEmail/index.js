import {icons} from '@assets';
import {Block, Header, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './style';

const SendEmail = () => {
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Vertify email" />
      <Block
        alignCenter
        marginTop={40}
        marginBottom={15}
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
            CONFIRM YOUR EMAIL ADDRESS
          </Text>
          <Block alignCenter paddingVertical={10}>
            <Text size={18}>We sent a confirmation email to:</Text>
            <Text size={18} fontType="bold">
              congkhanh2424@gmail.com
            </Text>
            <Text size={18}>Check your email and click on the</Text>
            <Text size={18}>confirmation link to continue.</Text>
          </Block>
          <Pressable
            marginTop={30}
            width={200}
            backgroundColor={theme.colors.white}>
            <Text center size={18} fontType="bold" color={theme.colors.blue}>
              Resend email
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default SendEmail;
