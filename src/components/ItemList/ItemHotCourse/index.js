import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {changeScreen} from 'reduxs/reducers';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotCourse = ({item, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS, {id: item._id});
  }, [item._id, dispatch, navigation]);

  return (
    <Pressable onPress={handleOpenCourseDetail} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image[0],
        }}
      />
      <Block style={styles.title}>
        <Text
          size={20}
          marginLeft={16}
          numberOfLines={1}
          color={theme.colors.white}
          fontType="bold">
          {item.courseName}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemHotCourse;
