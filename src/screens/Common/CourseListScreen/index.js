import {Block, Header} from '@components';
import ItemCourse from '@components/Common/ItemList/ItemCourse';
import {theme} from '@theme';
import React, {useCallback} from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {changeScreen} from 'reduxs/reducers';

const CourseListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOpenCourseDetail = useCallback(() => {
    dispatch(changeScreen('CourseDetail'));
    navigation.navigate(routes.TAB_DETAILS);
  }, [dispatch, navigation]);
  const data = [1, 2, 3, 4, 5, 6, 7];
  const _renderItem = (item, index) => (
    <ItemCourse index={index} onPress={handleOpenCourseDetail} />
  );
  return (
    <Block flex>
      <Header
        canGoBack
        title="GYM"
        colorTheme={theme.colors.blue}
        filter
        search
      />
      <Block flex alignCenter>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListScreen;
