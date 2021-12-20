import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {addWishListItem, removeWishListItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {HeartPf} from '@assets/icons';
import {Image} from 'react-native';
import ItemStats from '../ItemStats';
import {keyExtractor} from 'utils/keyExtractor';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ProductContent = ({food, props}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const content = [
    {title: 'Protein', stats: '160'},
    {title: 'Carbs', stats: '45g'},
    {title: 'Vitamin', stats: 'A+'},
  ];

  const handleFavorite = () => {
    if (wishList.includes(food.key)) {
      dispatch(removeWishListItem(food.key));
    } else {
      dispatch(addWishListItem(food.key));
    }
  };

  const _renderItem = useCallback(({item}) => {
    return <ItemStats title={item.title} stats={item.stats} />;
  }, []);

  return (
    <Block row alignCenter space="between" paddingTop={20}>
      <Block alignCenter justifyCenter width="40%">
        <FlatList
          data={content}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
        />
        <Pressable onPress={handleFavorite}>
          <Block alignCenter marginTop={10} marginBottom={20}>
            <HeartPf
              isActive={wishList.includes(food.key)}
              activeColor={theme.colors.red}
              deActiveColor={theme.colors.gray}
            />
            <Text size={16}>{t('favorite')}</Text>
          </Block>
        </Pressable>
      </Block>
      <Block width="60%">
        <Block
          style={styles.linearGradient}
          backgroundColor={theme.colors.border}>
          <Block flex alignCenter justifyCenter>
            <Block style={styles.header}>
              <Text
                center
                size={22}
                fontType="bold"
                marginHorizontal={16}
                paddingVertical={8}>
                {food.name}
              </Text>
            </Block>
            <Image source={{uri: food.image[0]}} style={styles.image} />
            <Block style={styles.bottom} paddingVertical={8}>
              <Text size={24} color={'#FF7F50'} center fontType="bold">
                {`$${food.lastPrice}`}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ProductContent;
