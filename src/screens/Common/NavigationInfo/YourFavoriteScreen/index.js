import {Block, Header} from '@components';
import ItemFavorite from '@components/ItemList/ItemFavorite';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

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
          showsVerticalScrollIndicator={false}
          style={{marginBottom: getSize.m(16)}}
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
