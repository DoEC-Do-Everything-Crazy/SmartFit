import {Block, Text} from '@components';
import ItemHotCourse from '@components/Common/ItemList/ItemHotCourse';
import {theme} from '@theme';
import React from 'react';
import {ScrollView, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListVertical = () => {
  const navigation = useNavigation();
  const _renderItem = (index, item) => <ItemHotCourse index={index} />;
  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.blue}>
          Hot Course
        </Text>
        <Pressable onPress={() => navigation.navigate(routes.COURSE_SCREEN)}>
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

export default ListVertical;
