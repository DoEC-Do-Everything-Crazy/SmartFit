import {Block, Button, Text} from '@components';
import {Dimensions, Image, Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  addCartItem,
  addWishListItem,
  removeWishListItem,
} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {BottomSheet} from '@components/BottomSheet';
import Header from './Header';
/* eslint-disable react-hooks/exhaustive-deps */
import {HeartPf} from '@assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import ListSimilar from '../../Bottom/HomeScreen/components/ListSimilar/index';
import {Rating} from 'react-native-ratings';
import Review from '@components/Review';
import Snackbar from 'react-native-snackbar';
import {productApi} from 'api/productApi';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ProductDetailScreen = ({props, route}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [quali, setQuali] = useState(1);
  const [isShowReview, setShowReview] = useState();
  const {id} = route.params;
  const {height: MAX_HEIGHT} = Dimensions.get('screen');

  const [product, setProduct] = useState(undefined);
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const modalizRef = useRef(null);
  const handleSub = useCallback(() => {
    if (quali > 1) {
      setQuali(quali - 1);
    }
  }, [quali]);
  const handleSum = useCallback(() => {
    setQuali(quali + 1);
  }, [quali]);

  const handleShowReview = useCallback(() => {
    setShowReview(!isShowReview);
  }, [isShowReview]);

  const getProductDetail = async productId => {
    try {
      const response = await productApi.getProduct(productId);

      setProduct(response);
      await productApi.updateViewProduct(response._id);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFavorite = () => {
    if (wishList.includes(product.key)) {
      dispatch(removeWishListItem(product.key));
    } else {
      dispatch(addWishListItem(product.key));
    }
  };

  useEffect(() => {
    getProductDetail(id);
  }, []);

  return (
    <>
      {product && (
        <Block backgroundColor={theme.colors.white} flex>
          <Block style={styles.header}>
            <Header />
          </Block>
          <Image style={styles.image} source={{uri: product.image[0]}} />
          <Block style={styles.bottom}>
            <Button
              title={t('viewDetails')}
              onPress={() => modalizRef?.current.open()}
            />
          </Block>
          <Block flex={1}>
            <ListSimilar type={'product'} />
          </Block>
          <BottomSheet
            ref={modalizRef}
            overlayStyle={styles.root}
            modalHeight={MAX_HEIGHT * 0.4}
            adjustToContentHeight={false}
            scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
            keyboardAvoidingBehavior={
              Platform.OS === 'ios' ? 'padding' : 'height'
            }>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Block paddingBottom={50} flex>
                <Block
                  flex
                  space={'between'}
                  paddingTop={20}
                  paddingHorizontal={16}>
                  <Text fontType="bold" size={20}>
                    {product.name}
                  </Text>

                  <Block row marginTop={10}>
                    <Pressable onPress={handleFavorite} marginRight={10}>
                      <HeartPf
                        isActive={wishList.includes(product.key)}
                        activeColor={theme.colors.red}
                        deActiveColor={theme.colors.gray}
                      />
                    </Pressable>
                    <Rating
                      readonly={true}
                      type="custom"
                      ratingColor={'#FFD700'}
                      ratingCount={5}
                      startingValue={product.averageRating}
                      imageSize={18}
                      tintColor={theme.colors.backgroundSetting}
                    />
                    <Text>({product.averageRating})</Text>
                  </Block>
                </Block>
                <Block
                  row
                  paddingVertical={10}
                  borderBottomWidth={1}
                  borderColor={theme.colors.lightGray}>
                  <Block row flex paddingHorizontal={16}>
                    <Pressable onPress={handleSub}>
                      {themeStore === 'dark' ? (
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          colors={['#70A2FF', '#54F0D1']}
                          style={styles.item}>
                          <Text center style={styles.text}>
                            -
                          </Text>
                        </LinearGradient>
                      ) : (
                        <Block
                          style={[styles.item, {backgroundColor: '#045694'}]}>
                          <Text center style={styles.text}>
                            -
                          </Text>
                        </Block>
                      )}
                    </Pressable>
                    <Block justifyCenter alignCenter marginHorizontal={15}>
                      <Text fontType="bold" size={20} center>
                        {quali}
                      </Text>
                    </Block>
                    <Pressable onPress={handleSum}>
                      {themeStore === 'dark' ? (
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          colors={['#70A2FF', '#54F0D1']}
                          style={styles.item}>
                          <Text center style={styles.text}>
                            +
                          </Text>
                        </LinearGradient>
                      ) : (
                        <Block
                          style={[styles.item, {backgroundColor: '#045694'}]}>
                          <Text center style={styles.text}>
                            +
                          </Text>
                        </Block>
                      )}
                    </Pressable>
                    <Block justifyCenter flex alignEnd>
                      <Text center fontType="bold" size={20} color={'#FF7F50'}>
                        {product.lastPrice}$
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex paddingTop={10} paddingBottom={20}>
                  <Button
                    title={t('addToCart')}
                    onPress={() => {
                      dispatch(addCartItem({addItem: product, quantity: 1}));

                      Snackbar.show({
                        text: t('addedToCart'),
                        duration: Snackbar.LENGTH_SHORT,
                      });

                      modalizRef?.current.close();
                    }}
                  />
                  <Block row paddingHorizontal={16}>
                    <Text fontType="bold" size={17}>
                      {t('brand')}:
                    </Text>
                    <Text marginLeft={15} size={17}>
                      {product.brand}
                    </Text>
                  </Block>
                  <Text
                    marginTop={10}
                    fontType="bold"
                    size={17}
                    paddingHorizontal={16}>
                    {t('description')}:
                  </Text>
                  <Text paddingHorizontal={16}>{product.description}</Text>
                </Block>
                <Block row paddingBottom={20} paddingHorizontal={16}>
                  <Text fontType="bold" size={17}>
                    {t('Review')}:
                  </Text>
                  <Pressable onPress={handleShowReview}>
                    <Text style={styles.link} marginLeft={15} size={17}>
                      {isShowReview ? t('hidden') : t('readMore')}
                    </Text>
                  </Pressable>
                </Block>
                {isShowReview ? (
                  <Review
                    averageRating={product.averageRating}
                    totalReviews={product.totalReviews}
                    productId={product._id}
                  />
                ) : null}
              </Block>
              <Block />
            </ScrollView>
          </BottomSheet>
        </Block>
      )}
    </>
  );
};

export default ProductDetailScreen;
