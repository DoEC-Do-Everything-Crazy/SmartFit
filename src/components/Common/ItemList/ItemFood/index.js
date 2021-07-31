import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';

const ItemFood = ({picture, title, group_id}) => {
  return (
    <Block alignCenter width={width / 6}>
      <Block
        width={48}
        height={48}
        radius={24}
        backgroundColor={theme.colors.blue}></Block>
      <Text center>Food</Text>
    </Block>
  );
};

export default ItemFood;