import {Block, Header} from '@components';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block paddingHorizontal={16}>
      <Header canGoBack title="HomeScreen" />
    </Block>
  );
};

export default HomeScreen;
