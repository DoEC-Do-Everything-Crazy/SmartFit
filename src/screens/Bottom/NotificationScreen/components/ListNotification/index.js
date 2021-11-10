import {Block} from '@components';
import ItemNotification from '@components/ItemList/ItemNotification';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {promotionApi} from 'api/promotionApi.js';
import {useSelector} from 'react-redux';

const ListNotification = () => {
  const {
    user: {user},
  } = useSelector(state => state.root);
  const [notification, setNotification] = useState([]);

  const fetchRecommendedByBMI = async () => {
    try {
      const response = await promotionApi.getPromotionByUserID(user.uid, {
        validateStatus: false,
      });
      if (response) {
        setNotification(response);
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchRecommendedByBMI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItem = ({item}) => <ItemNotification item={item} />;

  return (
    <Block marginTop={10}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={notification}
        keyExtractor={item => item._id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListNotification;
