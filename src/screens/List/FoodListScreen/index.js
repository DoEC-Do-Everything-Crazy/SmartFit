import {Block, Header} from '@components';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {routes} from '@navigation/routes';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';
import {useTranslation} from 'react-i18next';
import {recommendedApi} from 'api/recommendedApi';
import {bmiApi} from 'api/bmiApi';

const FoodListScreen = ({route}) => {
  const {
    user: {user},
  } = useSelector(state => state.root);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const {title} = route.params;
  const [foodsBMI, setFoodsBMI] = useState([]);

  const fetchFoodsByBMI = async () => {
    try {
      const response = await bmiApi.getBMI(user.uid, {
        validateStatus: false,
      });
      if (response) {
        const resData = await recommendedApi.getFoodsByBMI(
          response.bmi,
          'food',
          {
            validateStatus: false,
          },
        );
        setFoodsBMI(resData);
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchFoodsByBMI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack cart title={title} colorTheme={theme.colors.blue} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {title === t('dailyMeals') ? (
          <ListItemPopular foodsBMI={foodsBMI} />
        ) : (
          <>
            <ListItemNavProduct />
            <ListItemPopular />
          </>
        )}
      </ScrollView>
    </Block>
  );
};

export default FoodListScreen;
