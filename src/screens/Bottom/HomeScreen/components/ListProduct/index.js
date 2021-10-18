import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import ItemHotProduct from '@components/ItemList/ItemHotProduct';
import {apiUrl} from '@config/api';
import axios from 'axios';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ListProduct = props => {
  const [data, setData] = useState();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const navigation = useNavigation();

  const fetchData = async () => {
    await axios
      .get(`${apiUrl}/product`, {validateStatus: false})
      .then(response => {
        if (response.status === 200) {
          setData(response.data);
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
          Hot Product
        </Text>
        <Pressable
          onPress={() => navigation.navigate(routes.BOTTOM_TAB_PRODUCT)}>
          <Text size={17} style={styles.link}>
            See all
          </Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListProduct;
