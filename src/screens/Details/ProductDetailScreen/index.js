/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Text} from '@components';
import {Dimensions, Image, Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {BottomSheet} from '@components/BottomSheet';
import {DATA_REVIEW} from '@constants/';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import {Rating} from 'react-native-ratings';
import RatingValue from '@components/RatingValue';
import Review from '@components/Review';
import {addCartItem} from 'reduxs/reducers';
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
      const resData = await productApi.getProduct(productId);
      setProduct(resData);
    } catch (error) {
      console.error(error.message);
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
              title="Details"
              onPress={() => modalizRef?.current.open()}
            />
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
            <ScrollView>
              <Block paddingBottom={50} flex>
                <Block row flex paddingTop={20} paddingHorizontal={16}>
                  <Text fontType="bold" size={20}>
                    {product.name}
                  </Text>
                  <Block justifyCenter flex alignEnd>
                    <Rating
                      type="custom"
                      ratingColor={'#FFD700'}
                      ratingCount={5}
                      imageSize={18}
                      tintColor={theme.colors.backgroundSetting}
                    />
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
                        {product.price}$
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex paddingTop={10} paddingBottom={20}>
                  <Button
                    title={t('addToCart')}
                    onPress={() => {
                      dispatch(addCartItem({addItem: product, quantity: 1}));
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
                <Block row paddingHorizontal={16}>
                  <Text fontType="bold" size={17}>
                    {t('review')}:
                  </Text>
                  <Pressable onPress={handleShowReview}>
                    <Text style={styles.link} marginLeft={15} size={17}>
                      {t('readMore')}
                    </Text>
                  </Pressable>
                </Block>
                {isShowReview ? (
                  <>
                    <RatingValue />
                    <Review data={DATA_REVIEW} />
                  </>
                ) : null}
              </Block>
            </ScrollView>
          </BottomSheet>
        </Block>
      )}
    </>
  );
};

export default ProductDetailScreen;
