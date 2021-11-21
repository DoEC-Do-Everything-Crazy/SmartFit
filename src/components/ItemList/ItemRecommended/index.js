import {Block, Text} from '@components';
import {HeartPf, Rating} from '@assets/icons';
import {Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {courseApi} from 'api/courseApi';
import {foodApi} from 'api/foodApi';
import {recommendedApi} from 'api/recommendedApi.js';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ItemRecommended = ({item, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const [rate, setRate] = useState([]);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();

  const fetchRateData = async () => {
    const data = await recommendedApi.getAvgRate();
    setRate(data);
  };

  const updateViewFood = async item => {
    await foodApi.updateViewFood(item, {
      validateStatus: false,
    });
  };

  const updateViewCourse = async item => {
    await courseApi.updateViewCourse(item, {
      validateStatus: false,
    });
  };

  const navigationWithId = async (key, id) => {
    if (key === 'F') {
      navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: id});
      updateViewFood(id);
    } else {
      navigation.navigate(routes.TAB_DETAILS, {id: id});
      updateViewCourse(id);
    }
  };

  useEffect(() => {
    fetchRateData();
  }, []);

  return (
    <Pressable
      onPress={() => {
        navigationWithId(item.key.split('')[0], item._id);
      }}>
      <Block
        flex
        key={index}
        backgroundColor={theme.colors.border}
        style={styles.container}
        radius={8}
        padding={16}
        marginRight={10}>
        <Block flex row>
          <Block row flex>
            <Block
              row
              alignCenter
              backgroundColor={'#045694'}
              paddingHorizontal={10}
              radius={5}>
              <Rating />
              <Text fontType="bold" color={theme.colors.white} marginLeft={5}>
                {rate
                  .slice(0, 5)
                  .map(itemRate =>
                    itemRate.foodId === item._id ||
                    itemRate.courseId === item._id
                      ? Math.round(itemRate.rate * 10) / 10
                      : null,
                  )}
              </Text>
            </Block>
          </Block>
          <Block justifyEnd>
            <HeartPf color={theme.colors.lightGray} />
          </Block>
        </Block>
        <Block flex>
          <Text
            marginTop={10}
            size={16}
            color={theme.colors.text}
            numberOfLines={1}
            fontType="bold"
            key={index}>
            {item.name}
          </Text>
        </Block>
        <Block alignCenter flex marginTop={15}>
          {item.image.slice(0, 1).map((item, index) => (
            <Image
              height="100%"
              width="100%"
              key={index}
              style={styles.image}
              source={{
                uri: item,
              }}
            />
          ))}
          <Block width={width / 2} />
        </Block>
        <Block height={width / 12} />
        <Block row flex>
          <Block style={styles.space} />
          <Block flex backgroundColor={'#045694'} alignCenter radius={5}>
            <Text
              margin={2}
              size={16}
              numberOfLines={1}
              fontType="bold"
              color={theme.colors.white}
              key={index}>
              {item.lastPrice + ' ' + '$'}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
