import {Block, Empty, Header} from '@components';
import React, {useCallback, useEffect} from 'react';
import {
  setTempWishList,
  setTempWishListItemTouched,
  tempWishListToWishList,
} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native';
import ItemFavorite from '@components/ItemList/ItemFavorite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {favoriteApi} from 'api/favoriteApi';
import {getSize} from '@utils/responsive';
import {keyExtractor} from 'utils/keyExtractor';
/* eslint-disable react-hooks/exhaustive-deps */
import {lotties} from '@assets';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const YourFavoriteScreen = props => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    cart: {wishList, tempWishList},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const {t} = useTranslation();
  const theme = useTheme(themeStore);

  const getFavorite = async list => {
    try {
      const data = await favoriteApi.getFavorites({keyList: list});

      dispatch(setTempWishList(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnFavoriteClick = item => {
    dispatch(setTempWishListItemTouched(item.key));
  };

  const _renderItem = useCallback(({item, index}) => {
    return (
      <ItemFavorite
        item={item}
        marginTop={index % 2 !== 0 ? 96 : 0}
        onFavoriteClick={handleOnFavoriteClick}
      />
    );
  }, []);

  useEffect(() => {
    getFavorite(wishList);
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex>
        <Header
          canGoBack
          title={t('favorite')}
          onBackPress={() => {
            dispatch(tempWishListToWishList());
            navigation.goBack();
          }}
        />
        <Block
          flex
          paddingHorizontal={16}
          paddingTop={16}
          backgroundColor={theme.colors.backgroundSetting}>
          {tempWishList.length === 0 ? (
            <Empty lottie={lotties.emptySearch} />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{marginBottom: getSize.m(16)}}
              numColumns={2}
              data={tempWishList}
              renderItem={_renderItem}
              keyExtractor={keyExtractor}
            />
          )}
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default YourFavoriteScreen;
