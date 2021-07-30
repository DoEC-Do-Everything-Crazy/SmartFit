import {Block, Text} from '@components';
import ItemVertical from '@components/Common/ItemList/ItemVertical';
import {ScrollView} from 'react-native';
import React from 'react';
import {theme} from '@theme';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListVertical = () => {
  const _renderItem = (index, item) => <ItemVertical key={index} />;
  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.blue}>
          Hot Course
        </Text>
        <Text size={20}>See all</Text>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(_renderItem)}
      </ScrollView>
    </Block>
  );
};

export default ListVertical;
