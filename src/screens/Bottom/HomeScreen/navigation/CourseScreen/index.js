import {Block, Button, Header} from '@components';

import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Text} from 'react-native';
import styles from './styles';
import {theme} from '@theme';
import ItemCourseBig from '@components/Common/ItemList/ItemCourseBig';
import {height, width} from '@utils/responsive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CourseScreen = () => {
  const {top} = useSafeAreaInsets();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getData();
  // }, [getData, pageCurrent]);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const getData = async () => {
  //   const apiURL =
  //     'https://jsonplaceholder.typicode.com/photos?_limit=10&page=1' +
  //     pageCurrent;
  //   fetch(apiURL)
  //     .then(res => res.json())
  //     .then(resJSON => {
  //       setData(data.concat(resJSON));
  //       setIsLoading(false);
  //     });
  // };

  // const handleLoadMore = () => {
  //   console.log('handleLoadMore' + ' ' + pageCurrent);
  //   setPageCurrent(pageCurrent + 1);
  //   setIsLoading(true);
  // };

  const _renderItem = item => (
    <ItemCourseBig title={item.title} url={item.url} />
  );
  return (
    <Block flex marginBottom={16} backgroundColor={theme.colors.blue}>
      <Header canGoBack title="Cource" colorTheme={theme.colors.white} />
      <Block marginTop={-top - 10}>
        <Header type="Home" />
      </Block>
      <Block
        flex
        alignCenter
        marginTop={16}
        paddingHorizontal={16}
        backgroundColor={theme.colors.white}
        style={styles.body}>
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
