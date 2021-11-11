import {Block, Text} from '@components';
import React from 'react';
import {width} from '@utils/responsive';
import {useEffect, useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {HeartLine, Ratting} from '@assets/icons';
import {recommendedApi} from 'api/recommendedApi.js';

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

  const navigationWithId = async (key, id) => {
    if (key === 'F') {
      navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: id});
    } else {
      navigation.navigate(routes.TAB_DETAILS, {id: id});
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
              backgroundColor={theme.colors.recommended}
              paddingHorizontal={10}
              radius={5}>
              <Ratting />
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
            <HeartLine color={theme.colors.lightGray} />
          </Block>
        </Block>
        <Block flex>
          <Text
            marginTop={10}
            size={24}
            color={theme.colors.text}
            numberOfLines={1}
            fontType="bold"
            key={index}>
            {item.name}
          </Text>
        </Block>
        <Block alignCenter flex marginTop={30}>
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
        <Block height={width / 9} />
        <Block row flex>
          <Block style={styles.space} />
          <Block
            flex
            backgroundColor={theme.colors.recommended}
            alignCenter
            radius={5}>
            <Text
              size={20}
              numberOfLines={1}
              fontType="bold"
              color={theme.colors.white}
              key={index}>
              {item.price + ' ' + 'VNĐ'}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
