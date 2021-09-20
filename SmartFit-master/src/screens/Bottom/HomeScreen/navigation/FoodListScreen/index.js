import React from 'react';
import {Block, Text, Header} from '@components';
import {theme} from '@theme';
import Search from './components/Search';
import ListItemPopular from './components/ListItemPopular';
import ListItemNavProduct from './components/ListItemNavProduct';
import {ScrollView} from 'react-native';

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
