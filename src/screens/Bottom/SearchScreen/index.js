import {Block, Header, Text, TextInput} from '@components';
import ItemSearch from '@components/ItemList/ItemSearch';
import {useTheme} from '@theme';
import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {DATA_SEARCH} from '@constants';
import {Filter} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {exitApp} from 'hook';
import {useTranslation} from 'react-i18next';

const SearchScreen = ({props, route}) => {
  const [data, setData] = useState('');
  const {screen} = route?.params;
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  useEffect(() => {
    exitApp();
  }, []);

  const navigation = useNavigation();
  const _renderItem = ({item}) => <ItemSearch />;

  const _renderItemSearch = ({item}) => (
    <Block paddingHorizontal={16}>
      <Text fontType="bold" marginTop={12}>
        {item.title}
      </Text>
    </Block>
  );

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
            rightIcon={() => (
              <Pressable
                onPress={() => {
                  navigation.navigate(routes.FILTER_SCREEN);
                }}>
                <Block style={styles.iconSeach}>
                  <Filter color={theme.colors.iconInf} />
                </Block>
              </Pressable>
            )}
          />
        </Block>
        {data.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem={_renderItem}
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
                data={[1, 2]}
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
                data={DATA_SEARCH}
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
