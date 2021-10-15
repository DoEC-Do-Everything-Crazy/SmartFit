import {Block, Header} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import ListHotCourse from './components/ListHotCourse';
import ListHotFood from './components/ListHotFood';
import ListMenu from './components/ListMenu';
import ListProduct from './components/ListProduct';
import ListRecommended from './components/ListRecommended';
import axios from 'axios';
import {images} from '@assets';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';
import {apiUrl} from '@config/api';

const HomeScreen = props => {
  const [data, setData] = useState([]);
  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const dataBanner = [
    {
      img: images.banner1,
    },
    {
      img: images.banner2,
    },
    {
      img: images.banner3,
    },
    {
      img: images.banner4,
    },
  ];
  const _renderItemCarousel = ({item, index}) => (
    <Image source={item.img} style={styles.image} />
  );

  const fetchData = async () => {
    try {
      const resp = await axios({
        method: 'GET',
        url: `${apiUrl}/course`,
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log('error', err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Bottom" title="Home" colorTheme={theme.colors.white} cart />
      <Block
        flex
        alignCenter
        backgroundColor={theme.colors.backgroundSetting}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block alignCenter marginTop={20}>
            <Carousel
              loop
              ref={carouselRef}
              sliderWidth={width}
              sliderHeight={width}
              autoplay
              loopClonesPerSide={4}
              layout="tinder"
              itemWidth={width - 20}
              data={dataBanner}
              hasParallaxImages={true}
              renderItem={_renderItemCarousel}
              onSnapToItem={index => {
                setActivateIndex(index);
              }}
            />
            {
              <Pagination
                dotsLength={dataBanner.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.pagination}
                tappableDots
                carouselRef={carouselRef}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            }
          </Block>
          <ListMenu />
          <ListRecommended />
          <ListHotFood />
          <ListHotCourse data={data} />
          <ListProduct />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;
