import {Block, Text} from '@components';
import ItemRecommended from '@components/ItemList/ItemRecommended';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {DATA_RECOMMENDED} from '@constants';

const ListRecommended = () => {
  const navigation = useNavigation();
  const _renderItem = ({item, index}) => (
    <ItemRecommended
      index={index}
      _id={item._id}
      title={item.title}
      desc={item.desc}
      image={item.image}
    />
  );

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
        <Pressable
          onPress={() => navigation.navigate(routes.PRODUCT_LIST_SCREEN)}>
          <Text size={20}>See all</Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={DATA_RECOMMENDED}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListRecommended;
