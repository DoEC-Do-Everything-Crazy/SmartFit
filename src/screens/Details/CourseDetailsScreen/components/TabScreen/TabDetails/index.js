import {
  Block,
  Button,
  Header,
  InviteLogin,
  ListDataFooter,
  PayInfo,
  Text,
} from '@components';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/* eslint-disable react-hooks/exhaustive-deps */
import {Back} from '@assets/icons';
import {BottomSheet} from '@components/BottomSheet';
import ItemPT from '@components/ItemList/ItemPT';
import LinearGradient from 'react-native-linear-gradient';
import ListSimilar from '@screens/Bottom/HomeScreen/components/ListSimilar';
import {Rating} from 'react-native-ratings';
import Review from '@components/Review';
import {SafeAreaView} from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import {addCartItem} from 'reduxs/reducers';
import {courseApi} from 'api/courseApi';
import {keyExtractor} from 'utils/keyExtractor';
import {ptApi} from 'api/ptApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TabDetails = ({route, props}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {
    screen: {transferCourseScreen},
    theme: {theme: themeStore},
  } = useSelector(state => state.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const {id, nameScreen} = route.params;

  const modalizPTList = useRef(null);
  const modalizInf = useRef(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dataDetail, setDataDetail] = useState([]);
  const [dataPT, setDataPT] = useState([]);
  const [dataPTDetail, setDataPTDetail] = useState([]);
  const [infoPT, setInfoPT] = useState([]);
  const [isShowReview, setShowReview] = useState();
  const {bottom} = useSafeAreaInsets();

  const verticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
  const lessons = dataDetail.totalLessons;

  const randomMinute = lessons <= 50 ? 45 : 30;
  const day = lessons <= 50 ? 3 : 5;
  const weeks =
    lessons <= 50 ? Math.round(lessons / 3) : Math.round(lessons / 5);

  const getPtDetails = async _id => {
    try {
      const resData = await ptApi.getPT(_id, {validateStatus: false});

      setDataPTDetail(resData);
    } catch (error) {
      console.error('error', error.message);
    }
  };

  const handleCloseInf = useCallback(() => {
    modalizPTList?.current.open();
    modalizInf?.current.close();
  }, [modalizInf, modalizPTList]);

  const handleChoosePT = () => {
    modalizInf?.current.close();
    setInfoPT(dataPTDetail);
  };

  const handleOpenInf = useCallback(
    item => {
      modalizPTList?.current.close();
      modalizInf?.current.open();
      getPtDetails(item._id);
    },
    [modalizInf, modalizPTList],
  );

  const _renderItemPT = ({item, index}) => {
    return (
      <ItemPT
        index={index}
        onPress={() => handleOpenInf(item)}
        _id={item._id}
        courseId={item.courseId}
        email={item.email}
        mobile={item.mobile}
        name={item.name}
        gender={item.gender}
        birthday={item.birthday}
        price={item.price}
        image={item.image}
      />
    );
  };

  const handleShowReview = useCallback(() => {
    setShowReview(!isShowReview);
  }, [isShowReview]);

  const getCourseDetails = async courseId => {
    try {
      const resData = await courseApi.getCourse(courseId);

      setDataDetail(resData);

      await courseApi.updateViewCourse(resData._id);
    } catch (error) {
      console.error('error', error.message);
    }
  };

  const handleLoadMore = async () => {
    try {
      if (allLoaded || isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await ptApi.getPTs({
        pageNumber,
        courseId: id,
        active: true,
      });

      const {pts, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (pts.length === 0) {
        return;
      }

      setDataPT(dataPT.concat(pts));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initPTData = async () => {
    try {
      setIsLoading(true);

      const response = await ptApi.getPTs({
        pageNumber: 1,
        courseId: id,
        active: true,
      });

      const {pts, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (pts.length === 0) {
        return;
      }

      setDataPT(pts);
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _footerComponent = useCallback(() => {
    return (
      <ListDataFooter
        allLoaded={allLoaded}
        isLoading={isLoading}
        onPress={handleLoadMore}
      />
    );
  }, []);

  const HeaderComponent = useCallback(
    props => {
      const {title, inf} = props;
      return (
        <Block style={styles.headerWrapper}>
          {inf ? (
            <Pressable onPress={handleCloseInf}>
              <Block flex justifyCenter alignStart>
                <Back />
              </Block>
            </Pressable>
          ) : null}
          <Block
            width={inf ? screenWidth * 0.8 : screenWidth * 0.9}
            alignCenter>
            <Text
              paddingVertical={10}
              size={20}
              fontType="bold"
              color={theme.colors.iconInf}>
              {title}
            </Text>
          </Block>
        </Block>
      );
    },
    [handleCloseInf, styles.headerWrapper, theme.colors.blue],
  );

  const _renderItem = useCallback(({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ParallaxImage
          fadeDuration={1000}
          source={{uri: item}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
      </Block>
    );
  }, []);

  const handleOnRate = () => {
    navigation.navigate(routes.RATE_SCREEN, {
      item: {name: dataDetail.name, courseId: dataDetail._id},
    });
  };

  useEffect(() => {
    getCourseDetails(id);
    initPTData();
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('courseDetail')}
          colorTheme={theme.colors.black}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block paddingTop={20}>
            <Block paddingHorizontal={16}>
              <Carousel
                loop
                layout={'tinder'}
                layoutCardOffset={10}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                sliderWidth={screenWidth}
                sliderHeight={300}
                itemWidth={screenWidth}
                data={dataDetail.image || []}
                renderItem={_renderItem}
                hasParallaxImages={true}
                containerCustomStyle={styles.slider}
              />
            </Block>

            <Text
              paddingHorizontal={16}
              marginTop={32}
              marginBottom={10}
              size={32}
              fontType="bold">
              {dataDetail.name}
            </Text>

            <Block
              row
              paddingVertical={10}
              paddingHorizontal={16}
              backgroundColor={theme.colors.lightBlue}>
              <Block row flex>
                <Rating
                  type="custom"
                  ratingColor="#045694"
                  ratingCount={5}
                  imageSize={18}
                  startingValue={dataDetail.averageRating}
                  tintColor={theme.colors.lightBlue}
                />
                <Text marginLeft={8}>({dataDetail.totalReviews})</Text>
              </Block>
              <Text flex center color={theme.colors.iconInf}>
                {dataDetail.totalBuy} {t('bought')}
              </Text>
            </Block>

            <Block marginTop={16}>
              <Text paddingHorizontal={16} fontType="bold">
                {dataDetail.description}
              </Text>
            </Block>

            <Block marginTop={16} row alignCenter paddingHorizontal={16}>
              <Block>
                <Text>{t('planLength')}: </Text>
                <Text>{t('duration')}: </Text>
                <Text>{t('daysPerWeeks')}': </Text>
                <Text>{t('bodyFocus')}: </Text>
                <Text marginBottom={10}>{t('PT')}: </Text>
                {nameScreen === 'myCourse' ? (
                  <Text>{t('courseDetail')}: </Text>
                ) : null}
              </Block>
              <Block marginLeft={20}>
                <Text fontType="bold">
                  {weeks} {t('weeks')}
                </Text>
                <Text fontType="bold">
                  {randomMinute} {t('minutes')}
                </Text>
                <Text fontType="bold">
                  {day} {t('days')}
                </Text>
                <Text fontType="bold">Total body </Text>
                <Block row alignCenter>
                  {infoPT?.name && (
                    <Text marginRight={10} fontType="bold">
                      {infoPT?.name}
                    </Text>
                  )}
                  {transferCourseScreen === 'CourseDetail' ? (
                    <Pressable
                      style={{marginBottom: 10}}
                      onPress={() => modalizPTList?.current.open()}>
                      {themeStore === 'dark' ? (
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          colors={['#70A2FF', '#54F0D1']}
                          style={styles.choose}>
                          <Text style={styles.choosePT} fontType="bold">
                            {t('choose')}
                          </Text>
                        </LinearGradient>
                      ) : (
                        <Block
                          style={styles.choose}
                          backgroundColor={theme.colors.blue}>
                          <Text style={styles.choosePT} fontType="bold">
                            {t('choose')}
                          </Text>
                        </Block>
                      )}
                    </Pressable>
                  ) : (
                    <Text marginBottom={10} fontType="bold">
                      {infoPT?.name}
                    </Text>
                  )}
                </Block>
                {nameScreen === 'myCourse' ? (
                  <Pressable
                    onPress={() =>
                      navigation.navigate(routes.TAB_LESSON, {
                        nameScreen,
                        id: dataDetail._id,
                      })
                    }>
                    {themeStore === 'dark' ? (
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#70A2FF', '#54F0D1']}
                        style={styles.choose}>
                        <Text style={styles.choosePT} fontType="bold">
                          {t('view')}
                        </Text>
                      </LinearGradient>
                    ) : (
                      <Block
                        style={styles.choose}
                        backgroundColor={theme.colors.blue}>
                        <Text style={styles.choosePT} fontType="bold">
                          {t('view')}
                        </Text>
                      </Block>
                    )}
                  </Pressable>
                ) : null}
              </Block>
            </Block>

            <Block>
              {transferCourseScreen === 'CourseDetail' && (
                <>
                  <Block paddingHorizontal={16}>
                    <PayInfo
                      title1={t('course')}
                      titlePrice1={dataDetail.lastPrice}
                      title2={t('PT')}
                      titlePrice2={infoPT?.price || 0}
                    />
                  </Block>

                  <Block row marginTop={16} paddingHorizontal={16}>
                    <Text fontType="bold" size={17}>
                      {t('Review')}:
                    </Text>
                    <Pressable onPress={handleShowReview}>
                      <Text style={styles.link} marginLeft={16} size={17}>
                        {isShowReview ? t('hidden') : t('readMore')}
                      </Text>
                    </Pressable>
                  </Block>

                  {isShowReview && (
                    <Block marginTop={16}>
                      <Review
                        averageRating={dataDetail.averageRating}
                        totalReviews={dataDetail.totalReviews}
                        itemKey={dataDetail.key}
                        courseId={dataDetail._id}
                        onRate={handleOnRate}
                      />
                    </Block>
                  )}
                </>
              )}
            </Block>

            <Block marginVertical={16}>
              <ListSimilar type={'course'} courseType={dataDetail.type} />
            </Block>

            {/* BOTTOM SHEET PT */}
            <BottomSheet
              ref={modalizPTList}
              HeaderComponent={() =>
                HeaderComponent({title: t('personalTrainerList')})
              }
              modalHeight={screenHeight * 0.6}
              adjustToContentHeight={false}>
              <KeyboardAvoidingView
                style={styles.sendControlContainerOuter}
                behavior={verticalOffset}
                keyboardVerticalOffset={bottom * 0.7}>
                <Block flex alignCenter>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataPT}
                    keyExtractor={keyExtractor}
                    renderItem={_renderItemPT}
                    ListFooterComponent={_footerComponent}
                  />
                </Block>
              </KeyboardAvoidingView>
            </BottomSheet>
            {/* BOTTOM SHEET PT DETAILS */}
            <BottomSheet
              ref={modalizInf}
              HeaderComponent={() =>
                HeaderComponent({title: t('information'), inf: true})
              }>
              <KeyboardAvoidingView
                style={styles.sendControlContainerOuter}
                behavior={verticalOffset}
                keyboardVerticalOffset={bottom * 0.7}>
                <Block marginHorizontal={16}>
                  <Block alignCenter>
                    <Image
                      source={{
                        uri: dataPTDetail.image,
                      }}
                      style={styles.imageInf}
                    />
                    <Text marginTop={10} size={18} fontType="bold">
                      {dataPTDetail.name}
                    </Text>
                  </Block>
                  <Text marginTop={10} size={16} fontType="bold">
                    {t('description')}
                  </Text>
                  <Text>{dataPTDetail.description}</Text>
                  <Block
                    marginTop={10}
                    paddingVertical={5}
                    borderTopWidth={0.3}
                    alignCenter
                    borderColor={theme.colors.gray}
                    row>
                    <Block width={screenWidth / 3.6}>
                      <Text fontType="bold">{t('rating')}</Text>
                    </Block>
                    <Block width={screenWidth / 1.55} alignStart>
                      <Rating
                        readonly={true}
                        type="custom"
                        ratingCount={5}
                        startingValue={0}
                        ratingBackgroundColor="#c8c7c8"
                        imageSize={20}
                        ratingColor="#FFD700"
                        tintColor={theme.colors.backgroundSetting}
                      />
                    </Block>
                  </Block>
                  <Block
                    alignCenter
                    paddingVertical={5}
                    borderTopWidth={0.3}
                    row
                    borderColor={theme.colors.gray}>
                    <Block width={screenWidth / 3.6}>
                      <Text fontType="bold">{t('gender')}</Text>
                    </Block>
                    <Block width={screenWidth / 1.55}>
                      <Text>{t(`${dataPTDetail.gender}`)}</Text>
                    </Block>
                  </Block>
                  <Block
                    alignCenter
                    paddingVertical={5}
                    borderTopWidth={0.3}
                    row
                    borderColor={theme.colors.gray}>
                    <Block width={screenWidth / 3.6}>
                      <Text fontType="bold">Email</Text>
                    </Block>
                    <Block width={screenWidth / 1.55}>
                      <Text>{dataPTDetail.email}</Text>
                    </Block>
                  </Block>
                  <Block
                    alignCenter
                    paddingVertical={5}
                    borderTopWidth={0.3}
                    row
                    borderColor={theme.colors.gray}>
                    <Block width={screenWidth / 3.6}>
                      <Text fontType="bold">{t('mobile')}</Text>
                    </Block>
                    <Block width={screenWidth / 1.55}>
                      <Text>{dataPTDetail.mobile}</Text>
                    </Block>
                  </Block>
                  <Block
                    alignCenter
                    paddingVertical={5}
                    borderTopWidth={0.3}
                    row
                    borderColor={theme.colors.gray}>
                    <Block width={screenWidth / 3.6}>
                      <Text fontType="bold">{t('price')}</Text>
                    </Block>
                    <Block width={screenWidth / 1.55}>
                      <Text>${dataPTDetail.price}</Text>
                    </Block>
                  </Block>
                </Block>
                <Button title={t('choose')} onPress={handleChoosePT} />
              </KeyboardAvoidingView>
            </BottomSheet>
          </Block>
        </ScrollView>
        <Button
          title={t('addToCart')}
          onPress={() => {
            dispatch(
              addCartItem({
                addItem: {...dataDetail, pt: dataPTDetail},
                quantity: 1,
              }),
            );
            Snackbar.show({
              text: t('addedToCart'),
              duration: Snackbar.LENGTH_SHORT,
            });
            modalizInf?.current.close();
          }}
        />
      </Block>
    </SafeAreaView>
  );
};

export default TabDetails;
