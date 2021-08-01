import {Block, Text} from '@components';
import ItemHorizontal from '@components/Common/ItemList/ItemHorizontal';
import {ScrollView, FlatList} from 'react-native';
import React from 'react';
import {theme} from '@theme';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListHorizontal = () => {
  const _renderItem = (item, index) => <ItemHorizontal index={index} />;

  return (
    <Block flex marginTop={32}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.blue}>
          Recommended
        </Text>
        <Text size={20}>See all</Text>
      </Block>
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      /> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(_renderItem)}
      </ScrollView>
    </Block>
  );
};

export default ListHorizontal;
