import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';

const FoodListScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header
        canGoBack
        cart
        title="Healthy Food"
        colorTheme={theme.colors.blue}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItemNavProduct />
        <ListItemPopular />
      </ScrollView>
    </Block>
  );
};

export default FoodListScreen;
