import {Block, Header, Text} from '@components';
import {FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import Carousel from 'react-native-snap-carousel';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import {apiUrl} from '@config/api';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const fetchData = async () => {
    await axios
      .get(`${apiUrl}/product`, {validateStatus: false})
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data);
          return;
        }

        if (response.status === 404 || response.status === 500) {
          console.error(response.data.message);
        }
      })
      .catch(error => {
        console.error('Internal server error');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _renderItemCarousel = ({item, index}) => (
    <ItemCarousel item={item} key={index} />
  );

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title="Product" colorTheme={theme.colors.black} />
      <ScrollView>
        <Block alignCenter marginTop={16}>
          <Carousel
            loop
            sliderWidth={width}
            sliderHeight={width}
            itemWidth={width / 2}
            data={products}
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
            data={products}
            renderItem={_renderItemCarousel}
            keyExtractor={(item, index) => index}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProductListScreen;
