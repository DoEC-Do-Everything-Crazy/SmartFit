import {Block, Camera, Header as HeaderComponent, Text} from '@components';
import ItemOrder from '@components/ItemList/ItemOrder';
import {checkPermission, PERMISSION_TYPE} from 'hook/permissions';
import Header from './Header';
import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const OrderScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const [isCamera, setCamera] = useState(false);
  const {t} = useTranslation();
  const DATA_HEADER = [
    {
      id: 1,
      title: t('status'),
    },
    {
      id: 2,
      title: t('received'),
    },
    {
      id: 3,
      title: t('cancelled'),
    },
  ];

  const handleCamera = async () => {
    // const resultSP = await checkPermission(PERMISSION_TYPE.camera);
    // console.log('click');
    // if (resultSP === true) {
    setCamera(true);
    // }
  };
  const handleCloseCamera = async () => {
    setCamera(false);
  };
  const onSuccess = e => {
    console.log('click');
  };

  const _renderItem = (item, index) => (
    <ItemOrder onPress={handleCamera} index={index} />
  );
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
        onPress={() => setSelectedId(item.id)}
        backgroundColor={
          themeStore === 'dark' ? backgroundColor : {backgroundColor}
        }
        textColor={{color}}
      />
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      {isCamera ? (
        <>
          <Block style={styles.header}>
            <Header onPress={handleCloseCamera} />
          </Block>
          <Camera />
        </>
      ) : (
        <>
          <HeaderComponent
            canGoBack
            title={t('orderCart')}
            colorTheme={theme.colors.black}
          />
          <Block
            flex
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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={_renderItem}
              keyExtractor={item => item.item_id}
            />
          </Block>
        </>
      )}
    </Block>
  );
};

export default OrderScreen;
