import {Block, Text} from '@components';
import ItemRecommended from '@components/Common/ItemList/ItemRecommended';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListRecommended = () => {
  const navigation = useNavigation();
  const _renderItem = ({item, index}) => <ItemRecommended index={index} />;

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
        <Pressable>
          <Text size={20}>See all</Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListRecommended;
