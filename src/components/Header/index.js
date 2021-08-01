import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {icons} from '@assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import styles from './styles';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block
      row
      alignCenter
      paddingTop={top + 10}
      paddingHorizontal={16}
      space="between">
      <Block
        row
        alignCenter
        radius={10}
        height={40}
        space="between"
        paddingHorizontal={16}
        width="90%"
        backgroundColor={theme.colors.white}>
        <Text>Search</Text>
        <Image
          source={icons.search}
          style={styles.iconHeader}
          resizeMode="contain"
        />
      </Block>
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

const HeaderCommon = ({title, canGoBack, cart}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block>
      <Block
        row
        alignCenter
        paddingTop={top + 10}
        paddingVertical={16}
        space="between">
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={styles.iconBack}
              resizeMode="contain"
            />
          </Pressable>
        )}

        {title && (
          <Text
            flex
            center
            size={17}
            fontType="semibold"
            color={theme.colors.blue}>
            {title}
          </Text>
        )}
        {cart && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={styles.iconBack}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </Block>
    </Block>
  );
};
export default Header;
