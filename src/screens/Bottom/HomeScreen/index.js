import {Block, Header} from '@components';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListFood from './components/ListFood';
import styles from './styles';
import ListRecommended from './components/ListRecommended';
import ListHotCourse from './components/HotCource';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Home" />
      <Block
        flex
        alignCenter
        marginTop={16}
        backgroundColor={theme.colors.white}
        style={styles.container}>
        <ScrollView>
          <ListFood />
          <ListRecommended />
          <ListHotCourse />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;
