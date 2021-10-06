import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemRecommended = ({_id, title, desc, image, index, props}) => {
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
        <Block style={styles.title}>
          <Text color={theme.colors.white} fontType="bold">
            {title}
          </Text>
          <Text color={theme.colors.white}>{desc}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
