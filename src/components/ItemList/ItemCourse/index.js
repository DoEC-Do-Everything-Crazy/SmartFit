import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useCallback} from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {routes} from '@navigation/routes';
import {changeScreen} from 'reduxs/reducers';

const ItemCourse = ({_id, key, image, courseName, desc, ratting, price}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS, {id: _id});
  }, [_id, dispatch, navigation]);

  return (
    <Block style={styles.container}>
      <Block
        radius={5}
        borderWidth={0.3}
        marginHorizontal={10}
        height={98}
        width="95%"
        shadowColor={theme.colors.blue}
        alignCenter
        row>
        <Block>
          <Image source={{uri: image}} style={styles.image} />
          <Block
            alignCenter
            absolute
            bottom={-5}
            left={5}
            width={70}
            radius={5}
            backgroundColor={theme.colors.blue}>
            <Text
              size={12}
              marginLeft={5}
              color={theme.colors.white}
              fontType="bold">
              {price}$
            </Text>
          </Block>
        </Block>
        <Block marginLeft={10} height={98} width="73%">
          <Block>
            <Text size={18} fontType="bold">
              {courseName}
            </Text>
          </Block>
          <Text numberOfLines={1}>{desc}</Text>
          <Block row alignCenter marginTop={5}>
            <Image source={icons.ratings} style={styles.icon} />
            <Text size={15} marginLeft={5}>
              {ratting}
            </Text>
            <Block
              height={15}
              width={50}
              marginLeft={10}
              radius={5}
              backgroundColor={theme.colors.red}
              alignCenter>
              <Text
                size={10}
                marginLeft={5}
                color={theme.colors.white}
                fontType="bold">
                HOT
              </Text>
            </Block>
          </Block>
          <Pressable onPress={handleOpenCourseDetail} key={key}>
            <Block alignEnd width={'103%'}>
              <Block
                bottom={3}
                relative
                backgroundColor={theme.colors.green}
                style={styles.detail}
                width={'30%'}
                height={'65%'}
                justifyCenter
                alignCenter>
                <Text color={theme.colors.white} fontType="bold">
                  Detail
                </Text>
              </Block>
            </Block>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemCourse;
