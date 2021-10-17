/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header} from '@components';
import {DATA_FOOD, DATA_REVIEW} from '@constants/';
import React, {useEffect, useState} from 'react';

import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import RatingValue from './components/RatingValue';
import Review from './components/Review';
import {ScrollView} from 'react-native';
import {apiUrl} from '@config/api';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const FoodDetailsScreen = ({route, props}) => {
  const {id} = route.params;
  const [food, setFood] = useState(undefined);

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const getFoodDetail = async _id => {
    try {
      const resp = await axios({
        method: 'GET',
        url: `${apiUrl}/food/` + _id,
      });
      var obj = resp.data;
      setFood(obj);
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getFoodDetail(id);
  }, []);

  return (
    <>
      {food && (
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header
            canGoBack
            title="Food Details"
            colorTheme={theme.colors.black}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductContent food={food} />
            <DescriptionDetail desc={food.desc} />
            <RatingValue />
            <Review data={DATA_REVIEW} />
          </ScrollView>
          <Button
            title="BUY NOW"
            containerStyle={{backgroundColor: theme.colors.blue}}
            titleStyle={styles.btn}
          />
        </Block>
      )}
    </>
  );
};

export default FoodDetailsScreen;
