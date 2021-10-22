import * as Animatable from 'react-native-animatable';

import {FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import {productApi} from 'api/productApi';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ProductListScreen = ({props, navigation}) => {
  const [products, setProducts] = useState([]);
  const viewRef = React.useRef(null);

  const {
    productType: {type},
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const fetchData = async () => {
    try {
      const resData = await productApi.getProductByType(type);
      setProducts(resData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigation]);
  const _renderItemCarousel = ({item, index}) => (
    <ItemCarousel item={item} key={index} />
  );

  return (
    <Block backgroundColor={theme.colors.backgroundSetting}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Animatable.View
          ref={viewRef}
          easing={'ease-in-out'}
          style={styles.container}>
          <Block marginTop={32} justifyCenter alignCenter>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 16, marginLeft: 70}}
              numColumns={1}
              data={products}
              renderItem={_renderItemCarousel}
              keyExtractor={(item, index) => index}
            />
          </Block>
        </Animatable.View>
      </ScrollView>
    </Block>
  );
};

export default ProductListScreen;
