/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header} from '@components';
import React, {useRef, useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ListStep from './components/ListStep';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import setAuthToken from './../../../../../../utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {courseApi} from 'api/courseApi';

const {width: screenWidth} = Dimensions.get('window');

const TabLesson = ({props, route}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const {nameScreen, id} = route?.params;
  const navigation = useNavigation();
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [lessonId, setLessonId] = useState();
  const [dataLesson, setDataLesson] = useState([]);
  const [dataStep, setDataStep] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const lessonData = async () => {
    setIsLoading(true);
    try {
      setAuthToken(token);
      const response = courseApi.getCourseLessons({pageNumber}, id);
      const {lessons, page, pages} = response;
      if (page >= pages) {
        setAllLoaded(true);
      }
      setData(data.concat(lessons));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    lessonData();
  }, []);

  console.log('aaaaa', data);

  const _renderItem = ({index}) => {
    return (
      <Block style={styles.item}>
        <ListStep index={index} />
      </Block>
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title={t('lessons')} colorTheme={theme.colors.black} />
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={_renderItem}
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
      />
      <Pagination
        dotsLength={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.pagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </Block>
  );
};

export default TabLesson;
