/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, ListDataFooter, Text, TextInput} from '@components';
import React, {useEffect, useState} from 'react';
import {addHistoryItem, clearHistory, removeHistoryItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {Empty} from '@components';
import {FlatList} from 'react-native';
import ItemSearch from '@components/ItemList/ItemSearch';
import {TouchableOpacity} from 'react-native';
import {debounce} from 'lodash';
import {keyExtractor} from 'utils/keyExtractor';
import {lotties} from '@assets';
import {searchApi} from 'api/searchApi.js';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const SearchScreen = ({props, route, match}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [isSearch, setIsSearch] = useState(false);
  const {screen} = route?.params;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    history: {historyList: history},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await searchApi.getDataSearch({
        pageNumber,
        name,
      });

      const {searchs, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(searchs));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await searchApi.getDataSearch({
        pageNumber: 1,
        name,
      });

      const {searchs, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(searchs);
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
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

  const _renderItem = ({item}) => {
    const onPress = () => {
      dispatch(addHistoryItem(item.name));
    };
    if (item.key.includes('C')) {
      navigation.navigate(routes.TAB_DETAILS, {id: item._id});
      return;
    }
    if (item.key.includes('F')) {
      navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: item._id});
      return;
    }
    if (item.key.includes('P')) {
      navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, {id: item._id});
      return;
    }
    return <ItemSearch onPress={onPress} item={item} />;
  };

  const _renderItemSearch = ({item}) => {
    const onPress = () => {
      dispatch(removeHistoryItem(item));
    };
    return (
      <Block row alignCenter space="between" paddingHorizontal={16}>
        <Text fontType="bold" marginTop={12}>
          {item}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text marginTop={12}>X</Text>
        </TouchableOpacity>
      </Block>
    );
  };

  useEffect(() => {
    if (name !== '') {
      initData();
    } else {
      setData([]);
      setPageNumber(1);
    }
  }, [name]);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack={screen === 'screen' ? true : null}
        title={t('search')}
        colorTheme={theme.colors.black}
      />
      <Block paddingTop={20}>
        <Block paddingHorizontal={16}>
          <TextInput
            onFocus={() => setIsSearch(true)}
            label={t('search')}
            inputStyle={styles.inputStyle}
            containerInputStyle={styles.containerInputStyle}
            onChangeText={debounce(text => setName(text), 500)}
          />
        </Block>
        {data?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={keyExtractor}
            renderItem={_renderItem}
            ListFooterComponent={_footerComponent}
          />
        ) : (
          <Block>
            {isSearch === true ? (
              <Block marginTop={top + 100}>
                <Empty lottie={lotties.emptySearch} />
              </Block>
            ) : (
              <Block marginTop={20}>
                <Block
                  justifyCenter
                  height={30}
                  backgroundColor={theme.colors.border}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(clearHistory());
                    }}>
                    <Text
                      paddingHorizontal={16}
                      size={17}
                      fontType="bold"
                      color={'#045694'}>
                      {t('recentSearch')}| {t('clearAll')}
                    </Text>
                  </TouchableOpacity>
                </Block>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={history}
                  keyExtractor={keyExtractor}
                  renderItem={_renderItemSearch}
                  ListFooterComponent={_footerComponent}
                />
              </Block>
            )}
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default SearchScreen;
