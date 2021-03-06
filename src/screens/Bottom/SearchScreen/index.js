import {icons, lotties} from '@assets';
import {Block, Header, Text, TextInput, Empty} from '@components';
import ItemSearch from '@components/ItemList/ItemSearch';
import {theme} from '@theme';
import React, {useState} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import styles from './styles';
import {DATA_SEARCH} from '@constants';

const SearchScreen = () => {
  const [data, setData] = useState('');
  const [key, setKey] = useState('');

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
            <Pressable>
              <Image style={styles.iconSeach} source={icons.filter} />
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
