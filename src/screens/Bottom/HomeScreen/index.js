import {Block, Header} from '@components';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListFood from './components/ListFood';
import styles from './styles';
import ListHorizontal from './components/ListHorizontal';
import ListVertical from './components/ListVertical';
import React from 'react';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Home" title="HomeScreen" />
      <Block
        absolute
        style={styles.container}
        marginTop={top + 70}
        width={width}
        height={height}
        backgroundColor={theme.colors.white}>
        <ScrollView>
          <ListFood />
          <ListHorizontal />
          <ListVertical />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;