import {Alert, Image, Pressable} from 'react-native';
import {Block, Text} from '@components';

import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotProduct = ({item, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();

  return (
    <Pressable
      key={index}
      onPress={() => navigation.navigate(routes.PRODUCT_DETAIL_SCREEN)}>
      <Block style={{marginLeft: index === 0 ? 16 : 0}} marginRight={16}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Block style={styles.title}>
          <Text color={theme.colors.white} fontType="bold">
            {item.productName}
          </Text>
          <Text color={theme.colors.white} numberOfLines={1}>
            {item.desc}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemHotProduct;
