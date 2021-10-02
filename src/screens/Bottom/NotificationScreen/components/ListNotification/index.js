import {Block} from '@components';
import ItemNotification from '@components/ItemList/ItemNotification';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {DATA_NOTIFICATION} from '@constants';

const ListNotification = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => (
    <ItemNotification
      title={item.title}
      content={item.content}
      date={item.date}
      onPress={() => {}}
    />
  );

  return (
    <Block marginTop={10}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={DATA_NOTIFICATION}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListNotification;
