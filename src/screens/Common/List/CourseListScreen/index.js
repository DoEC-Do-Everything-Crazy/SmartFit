import {Block, Header} from '@components';
import ItemCourse from '@components/ItemList/ItemCourse';
import {theme} from '@theme';

import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';

const CourseListScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'GET',
        url: 'http://10.0.2.2:5000/api/course',
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

  const _renderItem = ({item}) => {
    return (
      <ItemCourse
        _id={item._id}
        typeName={item.typeName}
        key={item.key}
        price={item.price}
        image={item.image}
        courseName={item.courseName}
        desc={item.desc}
        ratting={item.ratting}
      />
    );
  };

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
          keyExtractor={(item, _) => item.key}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListScreen;
