import {Block, Text} from '@components';
import React from 'react';

const ItemStats = ({id, title, stats}) => {
  return (
    <Block marginVertical={20} alignCenter>
      <Text size={22} fontType="bold">
        {stats}
      </Text>
      <Text size={16}>{title}</Text>
    </Block>
  );
};

export default ItemStats;
