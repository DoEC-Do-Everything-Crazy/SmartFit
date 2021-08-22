import {Block, Header} from '@components';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import ItemCourse from '@components/Common/ItemList/ItemCourse';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import styles from './styles';

const CourseListScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const {top} = useSafeAreaInsets();
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

      <Block flex alignCenter style={styles.container}>
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
