/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import ItemHotFood from '@components/ItemList/ItemHotFood';
import ItemHotProduct from '@components/ItemList/ItemHotProduct';
import {courseApi} from 'api/courseApi';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {productApi} from 'api/productApi';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListSimilar = ({...props}) => {
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);

  const {type} = props;

  const [data, setData] = useState([]);

  const initData = async () => {
    try {
      if (type === 'course') {
        const response = await courseApi.getCourses({
          pageNumber: 1,
          orderBy: 'view',
        });

        const {courses} = response;
        setData(courses);
      }

      if (type === 'product') {
        const response = await productApi.getProducts({
          pageNumber: 1,
          orderBy: 'view',
        });

        const {products} = response;
        setData(products);
      }

      if (type === 'food') {
        const response = await foodApi.getFoods({
          pageNumber: 1,
          orderBy: 'view',
        });

        const {foods} = response;
        setData(foods);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const _renderItem = ({item, index}) => {
    if (type === 'product') {
      return <ItemHotProduct item={item} index={index} />;
    } else if (type === 'food') {
      return <ItemHotFood item={item} index={index} />;
    } else {
      return <ItemHotCourse item={item} index={index} />;
    }
  };

  return (
    <Block flex marginTop={30} marginBottom={10}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {type === 'product'
            ? t('similarProduct')
            : type === 'course'
            ? t('similarCourse')
            : t('similarFood')}
        </Text>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListSimilar;
