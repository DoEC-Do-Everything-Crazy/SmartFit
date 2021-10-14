import {Block, Text} from '@components';
import ItemRecommended from '@components/ItemList/ItemRecommended';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/core';
// import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {width, height} from '@utils/responsive';
import {Pressable} from 'react-native';
import {useStyles} from './styles';
import {routes} from '@navigation/routes';
// import {DATA_RECOMMENDED} from '@constants';

const ListRecommended = props => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const styles = useStyles(props, themeStore);
  const _renderItem = ({item, index}) => (
    <ItemRecommended
      index={index}
      _id={item._id}
      title={item.title}
      desc={item.desc}
      image={item.image}
    />
  );

  return (
    <Block space="between" marginTop={32}>
      <Block marginHorizontal={16} flex row>
        <Block flex>
          <Text size={20} fontType="bold" color={theme.colors.iconInf}>
            Recommended
          </Text>
        </Block>
        <Pressable
          onPress={() => navigation.navigate(routes.PRODUCT_LIST_SCREEN)}>
          <Text size={17} style={styles.link}>
            See all
          </Text>
        </Pressable>
      </Block>
      <Block marginLeft={-75} marginTop={16}>
        <Carousel
          ref={carouselRef}
          hasParallaxImages={true}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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
