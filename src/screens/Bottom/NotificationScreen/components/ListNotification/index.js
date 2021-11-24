/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import {FlatList} from 'react-native';
import ItemNotification from '@components/ItemList/ItemNotification';
import {keyExtractor} from 'utils/keyExtractor';
import {promotionApi} from 'api/promotionApi.js';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const ListNotification = props => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const [notification, setNotification] = useState([]);
  const theme = useTheme(themeStore);

  const fetchPromotion = async () => {
    try {
      const response = await promotionApi.getPromotionByUserID(
        user.uid,
        props.valuePromotion / 100,
        {
          validateStatus: false,
        },
      );
      if (response) {
        setNotification(response);
      }
    } catch (error) {
      console.error('error', error.message);
    }
  };

  useEffect(() => {
    fetchPromotion();
  }, []);

  const _renderItem = ({item}) => <ItemNotification item={item} />;

  return (
    <Block marginTop={10} backgroundColor={theme.colors.backgroundSetting}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={notification}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListNotification;
