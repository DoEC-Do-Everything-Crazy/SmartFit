/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList, Pressable} from 'react-native';
import ItemCourse from '@components/ItemList/ItemCourse';
import {courseApi} from 'api/courseApi';
import {courseType} from 'data/courseType';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Cart} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';

const CourseListScreen = ({route, props}) => {
  const {type} = route.params;
  const styles = useStyles(props, themeStore);
  const [data, setData] = useState([]);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const fetchData = async () => {
    try {
      const resData = await courseApi.getCoursesByType(type);
      setData(resData);
    } catch (error) {
      console.log('error', error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 200,
          }),
        },
      ],
    };
  });
  const onScroll = event => {
    // Check if the user is scrolling up or down by confronting the new scroll position with your own one

    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };
  const navigation = useNavigation();
  const _renderItem = ({item, index}) => {
    return (
      <Block
        paddingTop={index === 0 ? 20 : 0}
        paddingBottom={index === data.length - 1 ? 30 : 0}>
        <ItemCourse course={item} key={index} />
      </Block>
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        title={courseType.find(element => element.name === type).displayName}
        colorTheme={theme.colors.blue}
        filter
        search
      />
      <Block flex alignCenter>
        <FlatList
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, _) => item.key}
          renderItem={_renderItem}
        />
        <Animated.View style={[styles.groupButton, animatedStyles]}>
          <Pressable
            onPress={() => {
              navigation.navigate(routes.CART_SCREEN);
            }}>
            {themeStore === 'dark' ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#70A2FF', '#54F0D1']}
                style={styles.layout}
              />
            ) : null}
            <Cart color={theme.colors.white} />
          </Pressable>
        </Animated.View>
      </Block>
    </Block>
  );
};

export default CourseListScreen;
