import {Block, Header} from '@components';
import ItemFavorite from '@components/Common/ItemList/ItemFavorite';
import {theme} from '@theme';
import React from 'react';
import {Text, FlatList} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6];

const YourFavoriteScreen = () => {
  const _renderItemCarousel = ({item, index}) => {
    const marginTop = index % 2 === 0 ? 0 : 30;
    return <ItemFavorite marginTop={marginTop} />;
  };

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header canGoBack title="Favorite" colorTheme={theme.colors.black} />
      <Block flex paddingHorizontal={16}>
        <FlatList
          numColumns={2}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={_renderItemCarousel}
          keyExtractor={(item, index) => index}
        />
      </Block>
    </Block>
  );
};

export default YourFavoriteScreen;
