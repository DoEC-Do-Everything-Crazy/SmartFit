import {Block, Header, Button} from '@components';
import ItemFavorite from '@components/ItemList/ItemFavorite';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {favoriteApi} from 'api/favoriteApi';
import {clearWishList, removeWishListItem} from 'reduxs/reducers';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from './styles';

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
      console.log(wishList);
      const data = await favoriteApi.getFavorites({keyList: wishList});
      setFavorite(data);
    } catch (error) {
      console.log(error);
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
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginBottom: getSize.m(16)}}
            numColumns={2}
            data={favorite}
            renderItem={_renderItemCarousel}
            keyExtractor={(item, index) => index}
          />
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default YourFavoriteScreen;
