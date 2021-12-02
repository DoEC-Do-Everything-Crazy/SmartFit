/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, ListDataFooter} from '@components';
import React, {useCallback, useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemLesson from '@components/ItemList/ItemLesson';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {courseApi} from 'api/courseApi';
import {keyExtractor} from 'utils/keyExtractor';
import setAuthToken from '@utils/setAuthToken';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const TabLesson = ({props, route}) => {
  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const {id} = route?.params;

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await courseApi.getCourseLessons({pageNumber: 1}, id);
      const {lessons, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(lessons);
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await courseApi.getCourseLessons({pageNumber}, id);

      const {lessons, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(lessons));
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _renderItem = useCallback(({item}) => {
    return (
      <Block marginTop={16}>
        <ItemLesson item={item} />
      </Block>
    );
  }, []);

  const _footerComponent = () => {
    return (
      <ListDataFooter
        allLoaded={allLoaded}
        isLoading={isLoading}
        onPress={handleLoadMore}
      />
    );
  };

  useEffect(() => {
    setAuthToken(token);
    initData();
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block
        paddingBottom={10}
        backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('lessons')}
          colorTheme={theme.colors.black}
        />
        <ScrollView>
          <Block paddingHorizontal={16}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={_renderItem}
              keyExtractor={keyExtractor}
              ListFooterComponent={_footerComponent}
            />
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default TabLesson;
