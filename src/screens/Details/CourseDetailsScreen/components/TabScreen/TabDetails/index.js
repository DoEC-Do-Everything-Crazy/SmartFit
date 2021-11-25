/* eslint-disable react-hooks/exhaustive-deps */
import {Back} from '@assets/icons';
import {
  Block,
  Button,
  Header,
  InviteLogin,
  ListDataFooter,
  PayInfo,
  Text,
} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import ItemPT from '@components/ItemList/ItemPT';
import Review from '@components/Review';
import {routes} from '@navigation/routes';
import ListSimilar from '@screens/Bottom/HomeScreen/components/ListSimilar';
import {useTheme} from '@theme';
import {courseApi} from 'api/courseApi';
import {ptApi} from 'api/ptApi';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Rating} from 'react-native-ratings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from 'reduxs/reducers';
import {keyExtractor} from 'utils/keyExtractor';
import {useStyles} from './styles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TabDetails = ({route, props}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {user} = useSelector(state => state.root.user);
  const {id} = route.params;
  const {transferCourseScreen} = useSelector(state => state.root.screen);
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
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
  console.log(id);
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
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _footerComponent = () => {
    return (
      <ListDataFooter
        allLoaded={allLoaded}
        isLoading={isLoading}
        onPress={handleLoadMore}
      />
    );
  };

  useEffect(() => {
    getCourseDetails(id);
    initPTData();
  }, []);

  const lessons = dataDetail.totalLessons;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const randomMinute = lessons <= 50 ? 45 : 30;
  const day = lessons <= 50 ? 3 : 5;
  const weeks =
    lessons <= 50 ? Math.round(lessons / 3) : Math.round(lessons / 5);
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
  const _renderItem = ({item, index}, parallaxProps) => {
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
  };

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      {transferCourseScreen === 'CourseDetail' ? (
        <Header
          canGoBack
          title={t('courseDetail')}
          colorTheme={theme.colors.black}
        />
      ) : null}
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
            <Rating
              type="custom"
              ratingColor="#045694"
              ratingCount={5}
              imageSize={18}
              tintColor={theme.colors.lightBlue}
            />
            <Text marginLeft={100} color={theme.colors.iconInf}>
              {dataDetail.totalBuy} {t('bought')}
            </Text>
          </Block>
          <Block marginTop={10}>
            <Text paddingHorizontal={16} fontType="bold">
              {dataDetail.description}
            </Text>
            <Block
              row
              alignCenter
              marginVertical={16}
              paddingHorizontal={16}
              marginBottom={32}>
              <Block>
                <Text>{t('planLength')}: </Text>
                <Text>{t('duration')}: </Text>
                <Text>{t('daysPerWeeks')}': </Text>
                <Text>{t('bodyFocus')}: </Text>
                <Text>{t('PT')}: </Text>
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
                    <Pressable onPress={() => modalizPTList?.current.open()}>
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
                    <Text fontType="bold">{infoPT?.name}</Text>
                  )}
                </Block>
              </Block>
            </Block>
            {transferCourseScreen === 'CourseDetail' ? (
              <>
                <Block paddingHorizontal={16}>
                  <PayInfo
                    title1={t('course')}
                    titlePrice1={dataDetail.lastPrice}
                    title2={t('PT')}
                    titlePrice2={infoPT?.price || 0}
                  />
                </Block>
                <Block
                  row
                  marginTop={20}
                  paddingBottom={20}
                  paddingHorizontal={16}>
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
                    averageRating={dataDetail.averageRating}
                    totalReviews={dataDetail.totalReviews}
                    courseId={dataDetail._id}
                  />
                ) : null}
              </>
            ) : null}
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
              behavior={keyboardVerticalOffset}
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
              behavior={keyboardVerticalOffset}
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
        <ListSimilar type={'course'} />
      </ScrollView>
      {user ? (
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
      ) : (
        <InviteLogin
          navigate={routes.LOGIN_SCREEN}
          routes={routes.TAB_DETAILS}
        />
      )}
    </Block>
  );
};

export default TabDetails;
