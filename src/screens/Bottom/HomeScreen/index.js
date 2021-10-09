import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import ListHotCourse from './components/ListHotCourse';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';

import axios from 'axios';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useStyles} from './styles';

const HomeScreen = props => {
  const [data, setData] = useState([]);

  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

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
      <Header type="Bottom" title="Home" colorTheme={theme.colors.white} cart />
      <Block
        flex
        alignCenter
        backgroundColor={theme.colors.backgroundSetting}
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
