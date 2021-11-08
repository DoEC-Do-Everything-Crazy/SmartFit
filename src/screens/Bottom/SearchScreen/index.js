/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, Text, TextInput} from '@components';
import ItemSearch from '@components/ItemList/ItemSearch';
import {useTheme} from '@theme';
import {searchApi} from 'api/searchApi.js';
import {debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const SearchScreen = ({props, route, match}) => {
  const [page, setPage] = useState(1);
  const [dataSearch, setDataSearch] = useState([]);
  const [name, setName] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const {screen} = route?.params;
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
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
    return <ItemSearch item={item} />;
  };

  const _renderItemSearch = ({item}) => (
    <Block paddingHorizontal={16}>
      <Text fontType="bold" marginTop={12}>
        {item.title}
      </Text>
    </Block>
  );

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
            <Block>
              <Block
                marginTop={20}
                justifyCenter
                height={30}
                backgroundColor={theme.colors.border}>
                <Text
                  paddingHorizontal={16}
                  size={17}
                  fontType="bold"
                  color={'#045694'}>
                  {t('history')}
                </Text>
              </Block>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataSearch}
                keyExtractor={item => item.id}
                renderItem={_renderItem}
              />
            </Block>
            <Block marginTop={20}>
              <Block
                justifyCenter
                height={30}
                backgroundColor={theme.colors.border}>
                <Text
                  paddingHorizontal={16}
                  size={17}
                  fontType="bold"
                  color={'#045694'}>
                  {t('recentSearch')}| {t('clearAll')}
                </Text>
              </Block>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataSearch}
                keyExtractor={item => item.id}
                renderItem={_renderItemSearch}
              />
            </Block>
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default SearchScreen;
