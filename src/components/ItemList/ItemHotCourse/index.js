import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {changeScreen} from 'reduxs/reducers';
import {courseApi} from 'api/courseApi';
import {icons} from '@assets';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotCourse = ({item, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [isTouch, setTouch] = useState(true);
  // const [color, setColor] = useState();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS, {id: item._id});
  }, [item._id, dispatch, navigation]);

  const updateViewCourse = async item => {
    await courseApi.updateViewCourse(item, {
      validateStatus: false,
    });
  };

  // useEffect(() => {
  //   isTouch ? setColor(theme.colors.red) : setColor(theme.colors.gray);
  // }, [isTouch, theme.colors.gray, theme.colors.red]);
  return (
    <Pressable
      onPress={() => {
        handleOpenCourseDetail();
        updateViewCourse(item._id);
      }}
      style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image[0],
        }}
      />
      {/* <Pressable
        style={styles.iconHeart}
        onPress={() => {
          setTouch(!isTouch);
        }}>
        <HeartPf color={color} />
      </Pressable> */}
      <Block style={styles.title}>
        <Text
          size={20}
          marginLeft={16}
          numberOfLines={1}
          color={theme.colors.white}
          fontType="bold">
          {item.name}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemHotCourse;
