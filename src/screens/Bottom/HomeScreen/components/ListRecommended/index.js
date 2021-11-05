import {Block, Text} from '@components';
import React, {useRef} from 'react';
import {height, width} from '@utils/responsive';

import Carousel from 'react-native-snap-carousel';
import ItemRecommended from '@components/ItemList/ItemRecommended';
import {Pressable} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListRecommended = ({data, props}) => {
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const styles = useStyles(props, themeStore);

  const _renderItem = ({item, index}) => (
    <ItemRecommended item={item} index={index} />
  );

  return (
    <Block space="between" marginTop={32}>
      <Block marginHorizontal={16} flex row>
        <Block flex>
          <Text size={20} fontType="bold" color={theme.colors.iconInf}>
            {t('recommended')}
          </Text>
        </Block>
        <Pressable
          onPress={() => navigation.navigate(routes.PRODUCT_LIST_SCREEN)}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <Block marginLeft={-75} marginTop={16}>
        <Carousel
          ref={carouselRef}
          hasParallaxImages={true}
          data={data.slice(0, 5)}
          sliderWidth={width + 75}
          itemWidth={width / 1.4}
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
