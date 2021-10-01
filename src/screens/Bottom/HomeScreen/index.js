import {Block, Header} from '@components';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import ListHotCourse from './components/ListHotCourse';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';
import styles from './styles';
import axios from 'axios';

const HomeScreen = () => {
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
      console.log('error', err);
    }
  };
  console.log('Data', data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Home" />
      <Block
        flex
        alignCenter
        marginTop={16}
        backgroundColor={theme.colors.background}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListMenu />
          <ListRecommended />
          <ListHotCourse data={data} />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;
