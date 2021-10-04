import {icons} from '@assets';
import {Back, Cart} from '@assets/icons';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else if (props.type === 'Bottom') {
    return <HeaderBottom {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

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
        <Text>Search</Text>
        <Image
          source={icons.search}
          style={styles.iconHeader}
          resizeMode="contain"
        />
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
        marginBottom={16}
        space="between"
        backgroundColor={theme.colors.header}>
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Back />
          </Pressable>
        )}

        {title && (
          <Text flex center size={17} fontType="bold" color={theme.colors.blue}>
            {title}
          </Text>
        )}
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
            <Image
              source={icons.search}
              style={styles.iconBack}
              resizeMode="contain"
              tintColor={theme.colors.blue}
            />
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
      {title && (
        <Text flex center size={17} fontType="bold" color={theme.colors.white}>
          {title}
        </Text>
      )}
    </Block>
  );
};
export default Header;
