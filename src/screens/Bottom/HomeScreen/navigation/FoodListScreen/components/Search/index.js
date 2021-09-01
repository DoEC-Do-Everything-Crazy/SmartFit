import {icons} from '@assets';
import {Block} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const Search = () => {
  const [search, setSearch] = useState(null);
  return (
    <Block height={48} marginHorizontal={16}>
      <Block row alignCenter space="between">
        <Block
          row
          flex
          alignCenter
          paddingHorizontal={16}
          borderRadius={8}
          borderWidth={1}
          borderColor={theme.colors.blue}>
          <Image style={styles.image} source={icons.search} />
          <TextInput
            placeholder="Search for your meal"
            value={search}
            style={styles.search}
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </Block>
        <TouchableOpacity style={styles.touch}>
          <Image style={styles.icons} source={icons.filter} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Search;
