/* eslint-disable react-hooks/exhaustive-deps */
import {
  Block,
  Header as HeaderComponent,
  ListDataFooter,
  Text,
} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import ItemOrder from '@components/ItemList/ItemOrder';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {keyExtractor} from 'utils/keyExtractor';
import {orderApi} from 'api/orderApi';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const OrderScreen = props => {
  const {t} = useTranslation();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(1);
  const [status, setStatus] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const DATA_HEADER = [
    {
      id: 1,
      title: t('all'),
      status: undefined,
    },
    {
      id: 2,
      title: t('pending'),
      status: 'pending',
    },
    {
      id: 3,
      title: t('processing'),
      status: 'processing',
    },
    {
      id: 4,
      title: t('delivering'),
      status: 'delivering',
    },
    {
      id: 5,
      title: t('delivered'),
      status: 'delivered',
    },
    {
      id: 6,
      title: t('cancelled'),
      status: 'cancelled',
    },
  ];

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <Pressable onPress={onPress}>
      {themeStore === 'dark' ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={backgroundColor}
          style={styles.item}>
          <Text style={[styles.text, textColor]}>{item.title}</Text>
        </LinearGradient>
      ) : (
        <Block style={[styles.item, backgroundColor]}>
          <Text style={[styles.text, textColor]}>{item.title}</Text>
        </Block>
      )}
    </Pressable>
  );

  const _renderItemHeader = ({item}) => {
    const backgroundColor =
      themeStore === 'light'
        ? item.id === selectedId
          ? 'white'
          : '#045694'
        : item.id === selectedId
        ? ['#70A2FF', '#54F0D1']
        : ['#181E25', '#181E25'];
    const color =
      themeStore === 'dark'
        ? 'white'
        : item.id === selectedId
        ? 'black'
        : 'white';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setStatus(item.status);
        }}
        backgroundColor={
          themeStore === 'dark' ? backgroundColor : {backgroundColor}
        }
        textColor={{color}}
      />
    );
  };

  const _renderItem = ({item, index}) => {
    return <ItemOrder item={item} index={index} />;
  };

  const handleLoadMore = async () => {
    try {
      if (allLoaded || isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await orderApi.getOrders({pageNumber});

      const {orders, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (orders.length === 0) {
        return;
      }

      setData(data.concat(orders));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    try {
      setIsLoading(true);

      const response = await orderApi.getOrders({pageNumber});

      const {orders, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (orders.length === 0) {
        return;
      }

      setData(orders);
      setPageNumber(pageNumber + 1);
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

  useEffect(() => {
    initData();
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <HeaderComponent
          canGoBack
          title={t('orderCart')}
          colorTheme={theme.colors.black}
        />
        <ScrollView>
          <Block
            paddingHorizontal={16}
            backgroundColor={theme.colors.backgroundSetting}>
            <FlatList
              data={DATA_HEADER}
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={keyExtractor}
              renderItem={_renderItemHeader}
            />
          </Block>
          <Block paddingHorizontal={16}>
            <FlatList
              showsVerticalScrollIndicator={false}
              inverted={true}
              data={status ? data.filter(item => item.status === status) : data}
              renderItem={_renderItem}
              keyExtractor={keyExtractor}
            />
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default OrderScreen;
