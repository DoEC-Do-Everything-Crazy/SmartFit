import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeScreen} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotCourse = ({_id, image, courseName, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS, {id: _id});
  }, [_id, dispatch, navigation]);

  return (
    <Pressable onPress={handleOpenCourseDetail} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Block style={styles.title}>
        <Text
          size={20}
          marginLeft={16}
          numberOfLines={1}
          color={theme.colors.white}
          fontType="bold">
          {courseName}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemHotCourse;
