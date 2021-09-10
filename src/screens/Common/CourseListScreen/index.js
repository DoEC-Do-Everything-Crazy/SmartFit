import {Block, Header} from '@components';
import ItemCourse from '@components/Common/ItemList/ItemCourse';
import {theme} from '@theme';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';

const CourseListScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const _renderItem = (item, index) => <ItemCourse index={index} />;
  return (
    <Block flex>
      <Header
        canGoBack
        title="GYM"
        colorTheme={theme.colors.blue}
        filter
        search
      />
      <Block flex alignCenter>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListScreen;
