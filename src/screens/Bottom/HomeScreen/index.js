import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Homescreen" />
    </Block>
  );
};

export default HomeScreen;
