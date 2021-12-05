/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import {courseApi} from 'api/courseApi';
import {keyExtractor} from 'utils/keyExtractor';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListHotCourse = ({props}) => {
  const navigation = useNavigation();

  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const [data, setData] = useState([]);

  const initData = useCallback(async () => {
    try {
      const response = await courseApi.getCourses({
        pageNumber: 1,
        orderBy: 'rate',
        active: true,
      });

      setData(response.courses);
    } catch (error) {
      console.error('error', error.message);
    }
  }, []);

  const _renderItem = useCallback(({item}) => {
    return <ItemHotCourse item={item} />;
  }, []);

  const handleOnpress = useCallback(() => {
    navigation.navigate(routes.COURSE_LIST_TYPE_SCREEN);
  }, []);

  useEffect(() => {
    initData();
  }, []);

  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {t('hotCourse')}
        </Text>
        <Pressable onPress={handleOnpress}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <Block flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal
          data={data.slice(0, 3)}
          keyExtractor={keyExtractor}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default ListHotCourse;
