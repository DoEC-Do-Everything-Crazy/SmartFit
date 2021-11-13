import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import ItemHotFood from '@components/ItemList/ItemHotFood';
import {foodApi} from 'api/foodApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListHotFood = props => {
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const [foods, setFoods] = useState([]);

  const navigation = useNavigation();

  const getFoods = async () => {
    try {
      const data = await foodApi.getFoods();
      setFoods(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  const _renderItem = ({item, index}) => (
    <ItemHotFood item={item} index={index} />
  );

  return (
    <Block flex marginTop={30} marginBottom={10}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {t('hotFood')}
        </Text>
        <Pressable onPress={() => navigation.navigate(routes.FOOD_LIST_SCREEN)}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={foods}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListHotFood;
