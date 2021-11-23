/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Empty, Header} from '@components';
import React, {useEffect, useState} from 'react';
import {clearWishList, removeWishListItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native';
import ItemFavorite from '@components/ItemList/ItemFavorite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {favoriteApi} from 'api/favoriteApi';
import {getSize} from '@utils/responsive';
import {keyExtractor} from 'utils/keyExtractor';
import {lotties} from '@assets';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const YourFavoriteScreen = props => {
  const dispatch = useDispatch();
  const styles = useStyles(props, themeStore);
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const [favorite, setFavorite] = useState([]);

  const getFavorite = async wishList => {
    try {
      const data = await favoriteApi.getFavorites({keyList: wishList});

      setFavorite(data);
    } catch (error) {
      console.error(error);
    }
  };

  const _renderItemCarousel = ({item, index}) => {
    const marginTop = index % 2 === 0 ? 0 : 30;
    return <ItemFavorite item={item} marginTop={marginTop} />;
  };

  useEffect(() => {
    getFavorite(wishList);
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('favorite')}
          colorTheme={theme.colors.black}
        />
        <Block flex paddingHorizontal={16}>
          {wishList.length === 0 ? (
            <Empty lottie={lotties.emptySearch} />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{marginBottom: getSize.m(16)}}
              numColumns={2}
              data={favorite}
              renderItem={_renderItemCarousel}
              keyExtractor={keyExtractor}
            />
          )}
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default YourFavoriteScreen;
