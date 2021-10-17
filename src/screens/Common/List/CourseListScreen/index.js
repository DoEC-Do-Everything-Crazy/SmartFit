import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemCourse from '@components/ItemList/ItemCourse';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {apiUrl} from '@config/api';

const CourseListScreen = () => {
  const [data, setData] = useState([]);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'GET',
        url: `${apiUrl}/course`,
        data: data,
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log('error');
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
        title="GYM"
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
