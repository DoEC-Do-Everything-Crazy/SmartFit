import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const ItemSearch = ({item, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  return (
    <Pressable
      key={item.key}
      // onPress={() => navigation.navigate(routes.FOOD_DETAILS_SCREEN)}
      style={styles.container}>
      <Block row alignCenter width="85%">
        <Block
          shadow
          alignCenter
          justifyCenter
          radius={8}
          width={56}
          height={56}>
          <Image source={{uri: item.image[0]}} style={styles.imageSearch} />
        </Block>
        <Block row alignCenter width="95%" space="between">
          <Block marginLeft={15}>
            <Text size={16} fontType="bold">
              {item.name}
            </Text>
            <Text>{item.description}</Text>
          </Block>
          <Text size={16}>{item.lastPrice}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemSearch;
