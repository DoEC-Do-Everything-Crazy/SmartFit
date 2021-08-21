import {Block, Header} from '@components';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import ItemCourse from '@components/Common/ItemList/ItemCourse';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {top} = useSafeAreaInsets();
  const _renderItem = (item, index) => <ItemCourse index={index} />;
  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header canGoBack title="Cource" colorTheme={theme.colors.white} />
      <Block marginTop={top - 50}>
        <Header type="Home" />
      </Block>

      <Block
        absolute
        style={styles.container}
        marginTop={top + 120}
        width={width}
        height={height}
        backgroundColor={theme.colors.white}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={_renderItem}
          keyExtractor={item => item.item_id}
        />
      </Block>
    </Block>
  );
};

export default HomeScreen;
