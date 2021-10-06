import {Block, Header, Text} from '@components';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {FlatList, ScrollView} from 'react-native';

const ProductListScreen = () => {
  const [index, setIndex] = useState(0);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const _renderItemCarousel = ({item, index}) => <ItemCarousel />;

  return (
    <Block flex marginBottom={16} backgroundColor={theme.colors.background}>
      <Header canGoBack title="Product" colorTheme={theme.colors.black} />
      <ScrollView>
        <Block alignCenter marginTop={16}>
          <Carousel
            loop
            sliderWidth={width}
            sliderHeight={width}
            itemWidth={width / 2}
            data={[1, 2, 3, 4, 5, 6]}
            hasParallaxImages={true}
            renderItem={_renderItemCarousel}
          />
        </Block>
        <Block flex marginTop={32} paddingHorizontal={16}>
          <Text size={20} fontType="bold">
            Product
          </Text>
          <FlatList
            style={{marginTop: 16}}
            numColumns={2}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={_renderItemCarousel}
            keyExtractor={(item, index) => index}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProductListScreen;
