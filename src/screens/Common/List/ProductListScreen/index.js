import {Block} from '@components';
import {FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useStyles} from './styles';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import {apiUrl} from '@config/api';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import * as Animatable from 'react-native-animatable';

const ProductListScreen = ({props, navigation}) => {
  const [products, setProducts] = useState([]);
  const viewRef = React.useRef(null);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
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
      <ScrollView>
        <Animatable.View
          ref={viewRef}
          easing={'ease-in-out'}
          style={styles.container}>
          <Block marginTop={32} justifyCenter alignCenter>
            <FlatList
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
