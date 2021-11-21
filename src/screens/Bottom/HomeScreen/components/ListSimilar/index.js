import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import ItemHotFood from '@components/ItemList/ItemHotFood';
import ItemHotProduct from '@components/ItemList/ItemHotProduct';
import {courseApi} from 'api/courseApi';
import {foodApi} from 'api/foodApi';
import {productApi} from 'api/productApi';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListSimilar = props => {
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);

  const [foods, setFoods] = useState([]);
  const [product, setProduct] = useState([]);
  const [course, setCourse] = useState([]);

  const getProductByView = async () => {
    try {
      const data = await productApi.getProductByView();
      setProduct(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getFoodByView = async () => {
    try {
      const data = await foodApi.getFoodByView();
      setFoods(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCourseByView = async () => {
    try {
      const data = await courseApi.getCourseByView();
      setCourse(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFoodByView();
    getCourseByView();
    getProductByView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItemProduct = ({item, index}) => (
    <ItemHotProduct item={item} index={index} />
  );

  const _renderItemFood = ({item, index}) => (
    <ItemHotFood item={item} index={index} />
  );

  const _renderItemCourse = ({item, index}) => (
    <ItemHotCourse item={item} index={index} />
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
          {props.title}
        </Text>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        // nestedScrollEnabled
        data={
          props.title === t('similarProduct')
            ? product
            : props.title === t('similarFood')
            ? foods
            : course
        }
        keyExtractor={(item, index) => index}
        renderItem={
          props.title === t('similarProduct')
            ? _renderItemProduct
            : props.title === t('similarFood')
            ? _renderItemFood
            : _renderItemCourse
        }
      />
    </Block>
  );
};

export default ListSimilar;
