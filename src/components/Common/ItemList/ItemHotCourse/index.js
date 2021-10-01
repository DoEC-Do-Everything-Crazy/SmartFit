import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useCallback} from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {changeScreen} from 'reduxs/reducers';

const ItemHotCourse = ({
  _id,
  typeName,
  key,
  price,
  image,
  courseName,
  desc,
  ratting,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS, {id: _id});
  }, [_id, dispatch, navigation]);

  return (
    <Pressable
      key={key}
      onPress={handleOpenCourseDetail}
      style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Block style={styles.title}>
        <Text size={20} color={theme.colors.white} fontType="bold">
          {courseName}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemHotCourse;
