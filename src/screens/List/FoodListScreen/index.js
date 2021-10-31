import {Block, Header} from '@components';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';
import {useTranslation} from 'react-i18next';

const FoodListScreen = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        cart
        title={t('healthyFood')}
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
