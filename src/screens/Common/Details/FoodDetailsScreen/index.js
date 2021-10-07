import {Block, Button, Header} from '@components';
import {DATA_FOOD, DATA_REVIEW} from '@constants/';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import RatingValue from './components/RatingValue';
import Review from './components/Review';

const FoodDetailsScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header canGoBack title="Food Details" colorTheme={theme.colors.black} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductContent data={DATA_FOOD} />
        <DescriptionDetail />
        <RatingValue />
        <Review data={DATA_REVIEW} />
      </ScrollView>
      <Button
        title="BUY NOW"
        containerStyle={{backgroundColor: theme.colors.blue}}
        titleStyle={styles.btn}
      />
    </Block>
  );
};

export default FoodDetailsScreen;
