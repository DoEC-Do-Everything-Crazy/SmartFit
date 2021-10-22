import {Block, Header} from '@components';
import ItemFavorite from '@components/ItemList/ItemFavorite';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';

const YourFavoriteScreen = () => {
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const _renderItemCarousel = ({item, index}) => {
    const marginTop = index % 2 === 0 ? 0 : 30;
    return <ItemFavorite marginTop={marginTop} />;
  };

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title={t('favorite')} colorTheme={theme.colors.black} />
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
