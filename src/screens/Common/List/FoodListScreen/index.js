import {Block, Header} from '@components';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';

const FoodListScreen = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
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
