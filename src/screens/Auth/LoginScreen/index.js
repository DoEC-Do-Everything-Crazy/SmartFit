import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const LoginScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.blue}>
      <Block row alignCenter marginTop={top + 20}>
        <Image source={icons.logo} style={styles.logo} />
        <Block marginLeft={20}>
          <Text size={40} fontType="bold" color={theme.colors.white}>
            SMARTFIT
          </Text>
          <Text color={theme.colors.white}>Sign in to your account</Text>
        </Block>
      </Block>
      <Block style={styles.container}>
        <Block marginTop={120} paddingHorizontal={16}>
          <Button
            title="Sign In Phone Number"
            onPress={() => {}}
            titleStyle={styles.titleStyle}
          />
          <Block row alignCenter marginHorizontal={16} space="between">
            <Block width="40%" height={1} backgroundColor={theme.colors.blue} />
            <Text color={theme.colors.gray} fontType="bold">
              OR
            </Text>
            <Block width="40%" height={1} backgroundColor={theme.colors.blue} />
          </Block>
          <Button
            leftIcon={icons.google}
            title="Sign In with Google"
            onPress={() => {}}
            titleStyle={{...styles.titleStyle, color: theme.colors.gray}}
            containerStyle={styles.containerStyle}
          />
          <Button
            leftIcon={icons.facebook}
            title="Sign In with Facebook"
            onPress={() => {}}
            titleStyle={{...styles.titleStyle, color: theme.colors.gray}}
            containerStyle={styles.containerStyle}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default LoginScreen;
