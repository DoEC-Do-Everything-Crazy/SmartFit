import {Block, Text} from '@components';
import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const ListHotCourse = ({data}) => {
  const navigation = useNavigation();

  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);

  const _renderItem = ({item, index}) => (
    <ItemHotCourse
      index={index}
      _id={item._id}
      typeName={item.typeName}
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
        <Text size={20} fontType="bold" color={theme.colors.text}>
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
