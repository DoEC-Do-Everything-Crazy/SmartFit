import {Block, Text} from '@components';
import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Pressable} from 'react-native';

const ListHotCourse = ({data}) => {
  const navigation = useNavigation();

  const _renderItem = ({item}) => (
    <ItemHotCourse
      _id={item._id}
      typeName={item.typeName}
      key={item.key}
      price={item.price}
      image={item.image}
      courseName={item.courseName}
      desc={item.desc}
      ratting={item.ratting}
    />
  );

  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.blue}>
          Hot Course
        </Text>
        <Pressable
          onPress={() => navigation.navigate(routes.COURSE_LIST_TYPE_SCREEN)}>
          <Text size={20}>See all</Text>
        </Pressable>
      </Block>
      <Block flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default ListHotCourse;
