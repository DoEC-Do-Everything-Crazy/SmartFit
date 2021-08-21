import {Block, Header, Text} from '@components';
import ItemCarousel from '@components/Common/ItemList/ItemCarousel';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {FlatList} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6];

const ProductListScreen = () => {
  const [index, setIndex] = useState(0);
  const _renderItemCarousel = ({item, index}) => <ItemCarousel />;
  const _renderItemFood = ({item, index}) => <ItemProduct />;
  return (
    <Block flex marginBottom={16} backgroundColor={theme.colors.white}>
      <Header
        canGoBack
        cart
        title="Product Items"
        colorTheme={theme.colors.black}
      />
      <Block alignCenter marginTop={25}>
        <Carousel
          loop
          sliderWidth={width}
          sliderHeight={width}
          itemWidth={width / 2}
          data={DATA}
          hasParallaxImages={true}
          renderItem={_renderItemCarousel}
        />
      </Block>
      <Block flex marginTop={32} paddingHorizontal={16}>
        <Text size={20} fontType="bold">
          Food
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={_renderItemFood}
          keyExtractor={(item, index) => index}
        />
      </Block>
    </Block>
  );
};

export default ProductListScreen;
