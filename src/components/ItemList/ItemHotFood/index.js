import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {HeartPf, Layout} from '@assets/icons';
const ItemHotFood = ({_id, title, desc, image, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.FOOD_LIST_SCREEN)}>
      <Block
        key={index}
        style={{marginLeft: index === 0 ? 16 : 0}}
        marginRight={16}>
        <Image style={styles.image} source={{uri: image}} />
        <Block flex style={styles.shadow}>
          <Layout color={`${theme.colors.black}20`} />
        </Block>
        <Block flex style={styles.layout}>
          <Layout color={theme.colors.white} />
        </Block>
        <Block row flex>
          <Block shadow style={styles.icon}>
            <HeartPf color={theme.colors.red} />
          </Block>
          <Block column style={styles.title}>
            <Text numberOfLines={1} color={theme.colors.black} fontType="bold">
              {title}
            </Text>
            <Text numberOfLines={1} color={theme.colors.black}>
              {desc}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemHotFood;
