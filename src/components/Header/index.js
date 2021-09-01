import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {icons} from '@assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import styles from './styles';
import {routes} from '@navigation/routes';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
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
      <Pressable>
        <Image
          source={icons.cart}
          style={styles.iconHeader}
          resizeMode="contain"
        />
      </Pressable>
    </Block>
  );
};

const HeaderCommon = ({title, canGoBack, cart, search, filter, colorTheme}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block>
      <Block
        row
        alignCenter
        paddingHorizontal={16}
        paddingTop={top + 10}
        paddingVertical={16}
        space="between">
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={styles.iconBack}
              resizeMode="contain"
              tintColor={colorTheme}
            />
          </Pressable>
        )}

        {title && (
          <Text flex center size={17} fontType="bold" color={colorTheme}>
            {title}
          </Text>
        )}
        {cart && (
          <Pressable onPress={() => {}}>
            <Image
              source={icons.cart}
              style={styles.iconBack}
              resizeMode="contain"
              tintColor={colorTheme}
            />
          </Pressable>
        )}

        {search && (
          <Pressable onPress={() => {}}>
            <Image
              source={icons.search}
              style={styles.iconBack}
              resizeMode="contain"
              tintColor={colorTheme}
            />
          </Pressable>
        )}
      </Block>
    </Block>
  );
};
export default Header;
