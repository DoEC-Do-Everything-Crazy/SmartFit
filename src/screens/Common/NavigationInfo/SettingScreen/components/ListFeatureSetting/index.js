import {Block} from '@components';
import React from 'react';
import {FlatList} from 'react-native';
import ItemSetting from '@components/ItemList/ItemSetting';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
const ListFeatureSetting = ({data}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const _renderItem = ({index}) => (
    <ItemSetting
      title={data[index].title}
      data={data[index].data_item_switch}
      index={index}
    />
  );
  return (
    <Block
      backgroundColor={theme.colors.backgroundSetting}
      paddingTop={16}
      flex>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default ListFeatureSetting;
