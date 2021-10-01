import {Block, Header} from '@components';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import ListHotCourse from './components/HotCource';
import ListMenu from './components/ListMenu';
import ListRecommended from './components/ListRecommended';
import styles from './styles';
import axios from 'axios';

const HomeScreen = () => {
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
