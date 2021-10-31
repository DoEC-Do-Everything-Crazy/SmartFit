/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemCourse from '@components/ItemList/ItemCourse';
import {courseApi} from 'api/courseApi';
import {courseType} from 'data/courseType';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const CourseListScreen = ({route, props}) => {
  const {type} = route.params;
  const [data, setData] = useState([]);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const fetchData = async () => {
    try {
      const resData = await courseApi.getCoursesByType(type);
      setData(resData);
    } catch (error) {
      console.log('error', error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const _renderItem = ({item, index}) => {
    return <ItemCourse course={item} key={index} />;
  };

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        title={courseType.find(element => element.name === type).displayName}
        colorTheme={theme.colors.blue}
        filter
        search
      />
      <Block flex alignCenter paddingTop={20}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, _) => item.key}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListScreen;
