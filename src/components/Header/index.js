import {Back, Cart, Search} from '@assets/icons';
import {Block, GradientText, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Header = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const HeaderHome = () => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
      <Block
        row
        alignCenter
        paddingTop={top + 10}
        paddingHorizontal={16}
        space="between">
        <Pressable
          style={styles.search}
          onPress={() => navigation.navigate(routes.SEARCH_SCREEN)}>
          <Text color={theme.colors.placeholder}>Search</Text>
          <Search color={theme.colors.placeholder} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(routes.CART_SCREEN)}>
          <Cart />
        </Pressable>
      </Block>
    );
  };

  const HeaderCommon = ({title, canGoBack, cart, search}) => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
      <Block>
        <Block
          row
          shadow
          alignCenter
          paddingHorizontal={16}
          paddingTop={top + 10}
          paddingVertical={16}
          space="between"
          borderColor={theme.colors.border}
          borderBottomWidth={themeStore === 'dark' ? 1 : null}
          backgroundColor={theme.colors.header}>
          {canGoBack && (
            <Pressable onPress={() => navigation.goBack()}>
              <Back color={theme.colors.text} />
            </Pressable>
          )}

          {title &&
            (themeStore === 'light' ? (
              <Text
                flex
                center
                size={20}
                fontType="bold"
                color={theme.colors.text}>
                {title}
              </Text>
            ) : (
              <GradientText fontSize={20} fontWeight={'bold'}>
                {title}
              </GradientText>
            ))}
          {cart && (
            <Pressable
              onPress={() => {
                navigation.navigate(routes.CART_SCREEN);
              }}>
              <Cart />
            </Pressable>
          )}

          {search && (
            <Pressable
              onPress={() => {
                navigation.navigate(routes.SEARCH_SCREEN);
              }}>
              <Search color={theme.colors.text} />
            </Pressable>
          )}
        </Block>
      </Block>
    );
  };

  const HeaderBottom = ({title}) => {
    const {top} = useSafeAreaInsets();
    return (
      <Block
        row
        alignCenter
        paddingHorizontal={16}
        paddingTop={top + 10}
        paddingVertical={16}
        space="between"
        backgroundColor={theme.colors.blue}>
        {title &&
          (themeStore === 'light' ? (
            <Text
              flex
              center
              size={20}
              fontType="bold"
              color={theme.colors.white}>
              {title}
            </Text>
          ) : (
            <GradientText fontSize={20} fontWeight={'bold'}>
              {title}
            </GradientText>
          ))}
      </Block>
    );
  };

  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else if (props.type === 'Bottom') {
    return <HeaderBottom {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

export default Header;
