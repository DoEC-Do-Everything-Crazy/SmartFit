/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, Text, TextInput} from '@components';
import ItemSearch from '@components/ItemList/ItemSearch';
import {useTheme} from '@theme';
import {searchApi} from 'api/searchApi.js';
import {debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {addHistoryItem, clearHistory, removeHistoryItem} from 'reduxs/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {useStyles} from './styles';
import {TouchableOpacity} from 'react-native';
import {Empty} from '@components';
import {lotties} from '@assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SearchScreen = ({props, route, match}) => {
  const {top} = useSafeAreaInsets();
  const [isSearch, setIsSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [dataSearch, setDataSearch] = useState([]);
  const [name, setName] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const {screen} = route?.params;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    history: {historyList: history},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  let stopFetchMore = false;
  const fetchData = async () => {
    try {
      setDataSearch([]);
      setPage(1);
      if (name) {
        const resData = await searchApi.getDataSearch(name, page);
        setDataSearch(resData.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      if (!stopFetchMore) {
        const resData = await searchApi.getDataSearch(name, page + 1);
        setPage(page + 1);
        setDataSearch(dataSearch.concat(resData.data));
        stopFetchMore = true;
      }
      setLoadingMore(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const _renderItem = ({item}) => {
    const onPress = () => {
      dispatch(addHistoryItem(item.name));
    };
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
    fetchData();
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
            placeholder={t('search')}
            inputStyle={styles.inputStyle}
            containerInputStyle={styles.containerInputStyle}
            onChangeText={debounce(text => setName(text), 500)}
          />
        </Block>
        {dataSearch.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataSearch}
            keyExtractor={(item, index) => String(index)}
            renderItem={_renderItem}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            onScrollBeginDrag={() => {
              stopFetchMore = false;
            }}
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
                  keyExtractor={item => item.id}
                  renderItem={_renderItemSearch}
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
