import {Block, Header as HeaderComponent, Text} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';

import React, {useState, useEffect} from 'react';

import ItemOrder from '@components/ItemList/ItemOrder';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {orderApi} from 'api/orderApi';

const OrderScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState('All');
  const {t} = useTranslation();
  const [something, setSomething] = useState('');
  const DATA_HEADER = [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Received',
    },
    {
      id: 3,
      title: 'Cancel',
    },
  ];

  const _renderItem = ({item, index}) => {
    setSomething(item.status);
    return <ItemOrder item={item} index={index} />;
  };
  const [selectedId, setSelectedId] = useState(1);
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
          setStatus(item.title);
        }}
        backgroundColor={
          themeStore === 'dark' ? backgroundColor : {backgroundColor}
        }
        textColor={{color}}
      />
    );
  };

  const getAllOrder = async () => {
    try {
      const data = await orderApi.getOrders(user.uid);
      console.log('bbbb', data);
      setOrder(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllOrder();
  }, [something]);
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
            <ScrollView
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              justifyContent="center"
              alignItems="center">
              {DATA_HEADER.map((item, i) => (
                <_renderItemHeader key={i} item={item} />
              ))}
            </ScrollView>
          </Block>
          <Block paddingHorizontal={16}>
            {status === 'Cancel' && (
              <FlatList
                showsVerticalScrollIndicator={false}
                inverted={true}
                data={order.filter(item => item.status === 'Cancel')}
                renderItem={_renderItem}
                keyExtractor={item => item._id}
              />
            )}
            {status === 'Received' && (
              <FlatList
                showsVerticalScrollIndicator={false}
                inverted={true}
                data={order.filter(item => item.status === 'Received')}
                renderItem={_renderItem}
                keyExtractor={item => item._id}
              />
            )}
            {status === 'All' && (
              <FlatList
                showsVerticalScrollIndicator={false}
                inverted={true}
                data={order}
                renderItem={_renderItem}
                keyExtractor={item => item._id}
              />
            )}
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default OrderScreen;
