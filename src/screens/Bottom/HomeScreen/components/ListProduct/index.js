import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import ItemHotProduct from '@components/ItemList/ItemHotProduct';
import {keyExtractor} from 'utils/keyExtractor';
import {productApi} from 'api/productApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListProduct = props => {
  const {t} = useTranslation();
  const [data, setData] = useState();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const navigation = useNavigation();
  const fetchData = async () => {
    try {
      const resData = await productApi.getProducts();
      setData(resData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _renderItem = ({item, index}) => (
    <ItemHotProduct item={item} index={index} />
  );

  return (
    <Block flex marginTop={32} marginBottom={20}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {t('hotProduct')}
        </Text>
        <Pressable
          onPress={() => navigation.navigate(routes.BOTTOM_TAB_PRODUCT)}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListProduct;
