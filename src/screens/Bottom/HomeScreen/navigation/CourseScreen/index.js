import {Block, Header} from '@components';
import ItemCourseBig from '@components/Common/ItemList/ItemCourseBig';
import {theme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';

const CourseScreen = () => {
  const _renderItem = item => (
    <ItemCourseBig title={item.title} url={item.url} />
  );
  return (
    <Block flex marginBottom={16}>
      <Header
        canGoBack
        title="Course Category"
        colorTheme={theme.colors.blue}
      />
      <Block flex alignCenter paddingHorizontal={16}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseScreen;
