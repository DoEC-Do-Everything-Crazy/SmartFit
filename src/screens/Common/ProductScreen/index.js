import React from 'react';
import {Block, Text, Header} from '@components';
import {theme} from '@theme';
import Search from './components/Search';
import ListItemPopular from './components/ListItemPopular';
import ListItemNavProduct from './components/ListItemNavProduct';

const ProductScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header
        canGoBack
        cart
        title="Healthy Food"
        colorTheme={theme.colors.blue}
      />
      <Search />
      <ListItemNavProduct />
      <ListItemPopular />
    </Block>
  );
};

export default ProductScreen;
