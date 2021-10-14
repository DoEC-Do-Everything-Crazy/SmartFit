import {Block, GradientText, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {Back, Cart} from '@assets/icons';
import {routes} from '@navigation/routes';

const Header = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  return (
    <Block style={styles.root}>
      <Block style={styles.arrowLeftBack}>
        <Pressable onPress={() => navigation.goBack()}>
          <Back color={theme.colors.text} />
        </Pressable>
      </Block>
      {themeStore === 'light' ? (
        <Text center size={20} fontType="bold" color={theme.colors.text}>
          Product Detail
        </Text>
      ) : (
        <Block justifyCenter alignCenter>
          <GradientText fontSize={20} fontWeight={'bold'}>
            Product Detail
          </GradientText>
        </Block>
      )}
      <Block style={styles.arrowRight}>
        <Pressable
          onPress={() => {
            navigation.navigate(routes.CART_SCREEN);
          }}>
          <Cart />
        </Pressable>
      </Block>
    </Block>
  );
};

export default Header;
