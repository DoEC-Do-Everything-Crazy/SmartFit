/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import {height, width} from '@utils/responsive';

import Carousel from 'react-native-snap-carousel';
import ItemRecommended from '@components/ItemList/ItemRecommended';
import {Pressable} from 'react-native';
import {recommendedApi} from 'api/recommendedApi';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListRecommended = ({props}) => {
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const styles = useStyles(props, themeStore);

  const [data, setData] = useState([]);

  const initData = async () => {
    try {
      const response = await recommendedApi.getRecommend({
        validateStatus: false,
      });

      setData(response.recommends);
    } catch (error) {
      console.error('error', error.message);
    }
  };

  const _renderItem = ({item, index}) => (
    <ItemRecommended item={item} index={index} />
  );

  useEffect(() => {
    setAuthToken(token);
    initData();
  }, [token]);

  return (
    <Block space="between" marginTop={20}>
      <Block marginHorizontal={16} flex row>
        <Block flex>
          <Text size={20} fontType="bold" color={theme.colors.iconInf}>
            {t('recommended')}
          </Text>
        </Block>
        <Pressable
          onPress={() =>
            navigation.navigate(routes.FOOD_LIST_SCREEN, {
              title: t('recommended'),
              recommendData: data,
            })
          }>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <Block marginLeft={-150} marginTop={16}>
        <Carousel
          ref={carouselRef}
          hasParallaxImages={true}
          data={data}
          sliderWidth={width + 140}
          itemWidth={width / 2}
          sliderHeight={height / 2}
          renderItem={_renderItem}
          useScrollView
          autoplayInterval={1000}
          activeAnimationType={'decay'}
        />
      </Block>
    </Block>
  );
};

export default ListRecommended;
