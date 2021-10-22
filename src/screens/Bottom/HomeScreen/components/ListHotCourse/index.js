import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';

import ItemHotCourse from '@components/ItemList/ItemHotCourse';
import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListHotCourse = ({data, props}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const _renderItem = ({item, index}) => (
    <ItemHotCourse item={item} key={index} />
  );

  return (
    <Block flex marginTop={32}>
      <Block row alignCenter marginHorizontal={16} space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {t('hotCourse')}
        </Text>
        <Pressable
          onPress={() => navigation.navigate(routes.COURSE_LIST_TYPE_SCREEN)}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <Block flex>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.slice(0, 3)}
          keyExtractor={(item, index) => index}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default ListHotCourse;
