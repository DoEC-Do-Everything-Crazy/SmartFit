/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, ListDataFooter} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList, Image} from 'react-native';
import ItemStep from '@components/ItemList/ItemStep';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {courseApi} from 'api/courseApi';
import {keyExtractor} from 'utils/keyExtractor';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const TabStep = ({props, route}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const {id, image} = route?.params;

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initData = async () => {
    setIsLoading(true);
    try {
      const response = await courseApi.getLessonSteps({pageNumber: 1}, id);
      const {steps, page, pages} = response;

      console.log({response});

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(steps);
      setPageNumber(2);
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
      const response = await courseApi.getLessonSteps({pageNumber}, id);

      const {steps, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(steps));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _renderItem = ({item}) => {
    return (
      <Block marginTop={16}>
        <ItemStep item={item} />
      </Block>
    );
  };

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
    initData();
  }, []);

  console.log('image', data);
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block backgroundColor={theme.colors.backgroundSetting}>
        <Header canGoBack title={t('steps')} colorTheme={theme.colors.black} />
        <ScrollView>
          <Block flex paddingHorizontal={16}>
            {image && <Image style={styles.image} source={{uri: image}} />}
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

export default TabStep;
