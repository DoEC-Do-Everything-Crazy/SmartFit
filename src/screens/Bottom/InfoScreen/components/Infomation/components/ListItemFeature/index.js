import {Block} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {DATA_FEATURE} from '@constants/';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';

const ListItemFeature = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    const onPress = () => {
      navigation.navigate(item.navigation);
    };
    return (
      <ItemFeature
        height={50}
        icon={item.image}
        title={item.title}
        onPress={onPress}
      />
    );
  };
  return (
    <Block paddingHorizontal={16} height="50%">
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={DATA_FEATURE}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemFeature;
