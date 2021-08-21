import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';

const ItemMenu = ({picture, title, group_id, index}) => {
  return (
    <Block key={index} alignCenter width={width / 6}>
      <Block
        width={48}
        height={48}
        radius={30}
        backgroundColor={theme.colors.blue}></Block>
      <Text center>Food</Text>
    </Block>
  );
};

export default ItemMenu;
