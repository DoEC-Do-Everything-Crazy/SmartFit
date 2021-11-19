import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import {HeartPf} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';
import {useTranslation} from 'react-i18next';
import {productApi} from 'api/productApi';

const ItemCarousel = ({item, props}) => {
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  const {t} = useTranslation();

  const updateViewProduct = async item => {
    await productApi.updateViewProduct(item, {
      validateStatus: false,
    });
  };

  return (
    <Block
      row
      radius={8}
      width={width * 0.7}
      paddingBottom={16}
      marginBottom={16}>
      <Image source={{uri: item.image[0]}} style={styles.image} />
      <Block shadow style={styles.heartContainer}>
        <HeartPf
          isActive={wishList.includes(item.key)}
          activeColor={theme.colors.red}
          deActiveColor={theme.colors.gray}
        />
      </Block>
      <Block
        radius={8}
        backgroundColor={theme.colors.border}
        paddingLeft={16}
        paddingRight={2}
        width={width * 0.38}
        numberOfLines={1}>
        <Text size={16} fontType="bold" numberOfLines={1}>
          {item.name}
        </Text>
        <Block row alignCenter marginTop={10}>
          <Rating
            type="custom"
            ratingCount={5}
            readonly={true}
            imageSize={18}
            tintColor={theme.colors.backgroundSetting}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={14} color={theme.colors.gray}>
            (3)
          </Text>
        </Block>
        <Text size={11} marginTop={8} numberOfLines={5}>
          {item.description}
        </Text>

        <Block flex alignStart>
          <Text size={14} marginTop={8} color={'#FF7F50'} fontType="bold">
            {`$${item.lastPrice}`}
          </Text>
        </Block>
        <Pressable
          onPress={() => {
            navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, {id: item._id});
            updateViewProduct(item._id);
          }}>
          <Block flex>
            <Text
              size={14}
              fontType="bold"
              color={theme.colors.link}
              marginTop={8}>
              {t('detail')}
              {' >>'}
            </Text>
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
};

export default ItemCarousel;
