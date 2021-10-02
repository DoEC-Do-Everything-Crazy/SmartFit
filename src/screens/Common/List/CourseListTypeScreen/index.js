import {Block, Header} from '@components';
import ItemCourseBig from '@components/ItemList/ItemCourseBig';
import {theme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';

const CourseListTypeScreen = () => {
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
          data={[1]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListTypeScreen;
