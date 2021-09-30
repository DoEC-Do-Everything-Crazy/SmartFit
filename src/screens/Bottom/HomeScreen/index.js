import {Block, Header} from '@components';
import {theme} from '@theme';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListHotCourse from './components/HotCource';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';
import styles from './styles';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/course/pt', {
      // method: 'POST',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    })
      .then(response => response.json())
      .then(json => setData(json));
  }, [isFocused]);
  console.log('Data', data);

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
          <ListHotCourse />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;
