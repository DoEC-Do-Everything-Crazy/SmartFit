import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {HeartLine, Ratting} from '@assets/icons';
import {width} from '@utils/responsive';

const ItemRecommended = ({item, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();

  const navigationWithId = async (foodId, courseId, productId) => {
    if (foodId) {
      navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: foodId});
    } else if (courseId) {
      navigation.navigate(routes.TAB_DETAILS, {id: courseId});
    } else {
      navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, {id: productId});
    }
  };

  return (
    <Pressable
      onPress={() =>
        item._id.map(item => item.foodId).length
          ? navigationWithId(
              item._id[0].foodId,
              item._id[0].courseId,
              item._id[0].productId,
            )
          : navigationWithId(
              item._id[0].foodId,
              item._id[0].courseId,
              item._id[0].productId,
            )
      }>
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
                {item.rate}
              </Text>
            </Block>
          </Block>
          <Block justifyEnd>
            <HeartLine color={theme.colors.lightGray} />
          </Block>
        </Block>
        <Block flex>
          {item._id.map((item, index) => (
            <Text
              marginTop={10}
              size={24}
              color={theme.colors.text}
              numberOfLines={1}
              fontType="bold"
              key={index}>
              {item.name}
            </Text>
          ))}
        </Block>
        <Block alignCenter flex marginTop={30}>
          {item._id.map((item, index) => (
            <Image
              height="100%"
              width="100%"
              key={index}
              style={styles.image}
              source={{
                uri: item.imageItem[0],
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
            {item._id.map((item, index) => (
              <Text
                size={20}
                numberOfLines={1}
                fontType="bold"
                color={theme.colors.white}
                key={index}>
                {item.price}
              </Text>
            ))}
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
