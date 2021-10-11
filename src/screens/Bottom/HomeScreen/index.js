import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';
import ListHotCourse from './components/ListHotCourse';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';
import {ScrollView} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const HomeScreen = props => {
  const [data, setData] = useState([]);

  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const fetchData = async () => {
    try {
      const resp = await axios({
        method: 'GET',
        url: 'http://10.0.2.2:5000/api/course',
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log('error', err);
    }
  };
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
