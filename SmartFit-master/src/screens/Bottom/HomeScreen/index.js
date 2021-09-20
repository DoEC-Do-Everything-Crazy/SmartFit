import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListHotCourse from './components/HotCource';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';
import styles from './styles';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

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
