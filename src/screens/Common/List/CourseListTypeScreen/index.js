import {Block, Header} from '@components';
import ItemCourseBig from '@components/ItemList/ItemCourseBig';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';

const CourseListTypeScreen = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const _renderItem = item => (
    <ItemCourseBig title={item.title} url={item.url} />
  );
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
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
