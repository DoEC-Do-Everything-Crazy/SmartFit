import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';

const ItemStats = ({id, title, stats}) => {
  return (
    <Block marginVertical={30} alignCenter backgroundColor={theme.colors.white}>
      <Text size={22} fontType="bold">
        {stats}
      </Text>
      <Text size={16}>{title}</Text>
    </Block>
  );
};

export default ItemStats;
