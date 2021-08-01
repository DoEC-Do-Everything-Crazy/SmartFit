import {Block, Text} from '@components';
import ItemVertical from '@components/Common/ItemList/ItemVertical';
import {ScrollView, FlatList, Pressable} from 'react-native';
import React from 'react';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListVertical = () => {
  const navigation = useNavigation();
  const _renderItem = (index, item) => <ItemVertical index={index} />;
  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.blue}>
          Hot Course
        </Text>
        <Pressable onPress={() => navigation.navigate(routes.COURSESCREEN)}>
          <Text size={20}>See all</Text>
        </Pressable>
      </Block>
      <FlatList
        data={data}
        keyExtractor={item => item.item_id}
        renderItem={_renderItem}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(_renderItem)}
        </ScrollView> */}
    </Block>
  );
};

export default ListVertical;
