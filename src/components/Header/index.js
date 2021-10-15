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

  const HeaderCommon = ({title, canGoBack, cart, search}) => {
    const navigation = useNavigation();
    return (
      <Block style={styles.root} shadow>
        <Block style={styles.arrowLeftBack}>
          {canGoBack && (
            <Pressable onPress={() => navigation.goBack()}>
              <Back color={theme.colors.text} />
            </Pressable>
          )}
        </Block>
        {title &&
          (themeStore === 'light' ? (
            <Text center size={20} fontType="bold" color={theme.colors.text}>
              {title}
            </Text>
          ) : (
            <Block justifyCenter alignCenter>
              <GradientText fontSize={20} fontWeight={'bold'}>
                {title}
              </GradientText>
            </Block>
          ))}
        <Block style={styles.arrowRight}>
          {cart && (
            <Pressable
              onPress={() => {
                navigation.navigate(routes.CART_SCREEN);
              }}>
              <Cart color={theme.colors.white} />
            </Pressable>
          )}
        </Block>
        <Block style={styles.arrowRight}>
          {search && (
            <Block>
              <Pressable
                onPress={() => {
                  navigation.navigate(routes.SEARCH_SCREEN);
                }}>
                <Search color={theme.colors.text} />
              </Pressable>
            </Block>
          )}
        </Block>
      </Block>
    );
  };

  const HeaderBottom = ({title, cart}) => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
      <Block alignCenter paddingBottom={10} paddingHorizontal={40} row>
        <Block
          alignCenter
          row
          paddingHorizontal={16}
          paddingTop={top}
          backgroundColor={theme.colors.blue}>
          <Block flex>
            {title &&
              (themeStore === 'light' ? (
                <Text
                  center
                  size={20}
                  fontType="bold"
                  color={theme.colors.white}>
                  {title}
                </Text>
              ) : (
                <Block justifyCenter alignCenter>
                  <GradientText fontSize={20} fontWeight={'bold'}>
                    {title}
                  </GradientText>
                </Block>
              ))}
          </Block>
        </Block>

        {cart && (
          <Block paddingTop={top + 10}>
            <Pressable
              onPress={() => {
                navigation.navigate(routes.CART_SCREEN);
              }}>
              <Cart color={theme.colors.white} />
            </Pressable>
          </Block>
        )}
      </Block>
    );
  };

  if (props.type === 'Bottom') {
    return <HeaderBottom {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

export default Header;
