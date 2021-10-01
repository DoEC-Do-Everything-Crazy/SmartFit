/* eslint-disable react-hooks/exhaustive-deps */
import {icons} from '@assets';
import {Block, Header, PayInfo, Text} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import ItemPT from '@components/Common/ItemList/ItemPT';
import {theme} from '@theme';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';
import DATA from './DATA.json';
import axios from 'axios';
import styles from './styles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TabDetails = ({route}) => {
  const {id} = route.params;
  const {screen} = useSelector(state => state.root.screen);
  const modalizPTList = useRef(null);
  const modalizInf = useRef(null);
  const {bottom} = useSafeAreaInsets();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';

  const handleOpenInf = useCallback(() => {
    modalizPTList?.current.close();
    modalizInf?.current.open();
  }, [modalizInf, modalizPTList]);

  const handleCloseInf = useCallback(() => {
    modalizPTList?.current.open();
    modalizInf?.current.close();
    console.log('click');
  }, [modalizInf, modalizPTList]);

  const _renderItemPT = (item, index) => (
    <ItemPT index={index} onpress={handleOpenInf} />
  );
  const [data, setData] = useState([]);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'GET',
        url: 'http://10.0.2.2:5000/api/course/' + id,
        data: data,
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log('error', err);
    }
  };
  console.log('Data', data.courseName);
  useEffect(() => {
    fetchData();
  }, []);

  const sessions = data?.session;

  const minute = [25, 30, 35, 40, 45];
  const randomMinute = minute[Math.floor(Math.random() * minute.length)];
  console.log('aaaaaaaaa', randomMinute);
  const HeaderComponent = useCallback(
    props => {
      const {title, inf} = props;
      return (
        <Block style={styles.headerWrapper}>
          {inf ? (
            <Pressable onPress={handleCloseInf}>
              <Block flex justifyCenter alignStart>
                <Image source={icons.back} style={styles.icon} />
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
              color={theme.colors.blue}>
              {title}
            </Text>
          </Block>
        </Block>
      );
    },
    [handleCloseInf],
  );
  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ParallaxImage
          fadeDuration={1000}
          source={{uri: data.image}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
      </Block>
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.background}>
      {screen === 'CourseDetail' ? (
        <Header
          canGoBack
          title="Course Detail"
          colorTheme={theme.colors.black}
        />
      ) : null}
      <ScrollView>
        <Block>
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
              data={[data.image, data.image]}
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
            {data.courseName}
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
            <Text marginLeft={100} color={theme.colors.blue}>
              6,3k Completed
            </Text>
          </Block>
          <Block marginTop={10} paddingHorizontal={16}>
            <Text fontType="bold">{data.desc}</Text>
            <Block row alignCenter marginVertical={16} marginBottom={32}>
              <Block>
                <Text>Plan length: </Text>
                <Text>Avg. Duration: </Text>
                <Text>Days per Weeks: </Text>
                <Text>Body Focus: </Text>
                <Text>PT: </Text>
              </Block>
              <Block marginLeft={20}>
                <Text fontType="bold">4 weeks</Text>
                <Text fontType="bold">{randomMinute} Minutes</Text>
                <Text fontType="bold">5 days </Text>
                <Text fontType="bold">Total body </Text>
                {screen === 'CourseDetail' ? (
                  <Pressable
                    style={styles.choose}
                    onPress={() => modalizPTList?.current.open()}>
                    <Text style={styles.choosePT} fontType="bold">
                      Choose
                    </Text>
                  </Pressable>
                ) : (
                  <Text fontType="bold">?????</Text>
                )}
              </Block>
            </Block>
            {screen === 'CourseDetail' ? (
              <>
                <PayInfo
                  title1="Course"
                  titlePrice1={data.price}
                  title2="Personal Trainer"
                  titlePrice2={10000}
                  total={15000}
                />
                <Block style={styles.bottomLayout}>
                  <Pressable
                    style={styles.button}
                    onPress={() => modalizInf?.current.close()}>
                    <Text color={theme.colors.white} fontType="bold" size={18}>
                      CHOOSE
                    </Text>
                  </Pressable>
                </Block>
              </>
            ) : null}
          </Block>
          {/* BOTTOM SHEET PT */}
          <BottomSheet
            ref={modalizPTList}
            HeaderComponent={() =>
              HeaderComponent({title: 'Personal Trainer List'})
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
                  data={data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={_renderItemPT}
                />
              </Block>
            </KeyboardAvoidingView>
          </BottomSheet>
          {/* BOTTOM SHEET PT DETAILS */}
          <BottomSheet
            ref={modalizInf}
            HeaderComponent={() =>
              HeaderComponent({title: 'Infomation', inf: true})
            }>
            <KeyboardAvoidingView
              style={styles.sendControlContainerOuter}
              behavior={keyboardVerticalOffset}
              keyboardVerticalOffset={bottom * 0.7}>
              <Block marginHorizontal={16}>
                <Block alignCenter>
                  <Image
                    source={{
                      uri: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
                    }}
                    style={styles.imageInf}
                  />
                  <Text marginTop={10} size={18} fontType="bold">
                    CHUONG HOANG
                  </Text>
                </Block>
                <Text marginTop={10} size={16} fontType="bold">
                  Description
                </Text>
                <Text>
                  'Something..... Something.....Something.....
                  Something.....Something..... Something.....'
                </Text>
                <Block
                  marginTop={10}
                  paddingVertical={5}
                  borderTopWidth={0.3}
                  alignCenter
                  borderColor={theme.colors.gray}
                  row>
                  <Block width={screenWidth / 3.6}>
                    <Text fontType="bold">Ratting</Text>
                  </Block>
                  <Block width={screenWidth / 1.55} alignStart>
                    <Rating
                      type="custom"
                      ratingCount={5}
                      ratingBackgroundColor="#c8c7c8"
                      imageSize={20}
                      ratingColor="#FFD700"
                      tintColor={theme.colors.background}
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
                    <Text fontType="bold">Gender</Text>
                  </Block>
                  <Block width={screenWidth / 1.55}>
                    <Text>Male</Text>
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
                    <Text>Hoangthienchuong2302@gmail.com</Text>
                  </Block>
                </Block>
                <Block
                  alignCenter
                  paddingVertical={5}
                  borderTopWidth={0.3}
                  row
                  borderColor={theme.colors.gray}>
                  <Block width={screenWidth / 3.6}>
                    <Text fontType="bold">Mobile</Text>
                  </Block>
                  <Block width={screenWidth / 1.55}>
                    <Text>0933961814</Text>
                  </Block>
                </Block>
                <Block
                  alignCenter
                  paddingVertical={5}
                  borderTopWidth={0.3}
                  row
                  borderColor={theme.colors.gray}>
                  <Block width={screenWidth / 3.6}>
                    <Text fontType="bold">Birthday</Text>
                  </Block>
                  <Block width={screenWidth / 1.55}>
                    <Text>20/08/1996</Text>
                  </Block>
                </Block>
                <Block
                  alignCenter
                  paddingVertical={5}
                  borderTopWidth={0.3}
                  row
                  borderColor={theme.colors.gray}>
                  <Block width={screenWidth / 3.6}>
                    <Text fontType="bold">Price</Text>
                  </Block>
                  <Block width={screenWidth / 1.55}>
                    <Text>$10000</Text>
                  </Block>
                </Block>
                <Block style={styles.bottomLayout}>
                  <Pressable
                    style={styles.button}
                    onPress={() => modalizInf?.current.close()}>
                    <Text color={theme.colors.white} fontType="bold" size={18}>
                      CHOOSE
                    </Text>
                  </Pressable>
                </Block>
              </Block>
            </KeyboardAvoidingView>
          </BottomSheet>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default TabDetails;
