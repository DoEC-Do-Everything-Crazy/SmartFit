import {Block, Header, Text, TextInput} from '@components';
import ItemSearch from '@components/ItemList/ItemSearch';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {DATA_SEARCH} from '@constants';
import {Filter} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const SearchScreen = props => {
  const [data, setData] = useState('');

  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();
  const _renderItem = ({item}) => <ItemSearch />;

  const _renderItemSearch = ({item}) => (
    <Block>
      <Text fontType="bold" marginTop={12}>
        {item.title}
      </Text>
    </Block>
  );

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header title="Search" colorTheme={theme.colors.black} />
      <Block paddingHorizontal={16}>
        <TextInput
          placeholder="Search"
          inputStyle={styles.inputStyle}
          containerInputStyle={styles.containerInputStyle}
          rightIcon={() => (
            <Pressable
              onPress={() => {
                navigation.navigate(routes.FILTER_SCREEN);
              }}>
              <Block style={styles.iconSeach}>
                <Filter />
              </Block>
            </Pressable>
          )}
        />
        {data.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={_renderItem}
          />
        ) : (
          <Block>
            <Block>
              <Text fontType="bold" color={theme.colors.blue}>
                History
              </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2]}
                keyExtractor={item => item.id}
                renderItem={_renderItem}
              />
            </Block>
            <Block marginTop={20}>
              <Text fontType="bold" color={theme.colors.blue}>
                Recent search | Clear all
              </Text>
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
