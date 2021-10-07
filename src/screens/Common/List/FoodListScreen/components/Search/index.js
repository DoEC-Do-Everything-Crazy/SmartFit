import {icons} from '@assets';
import {Block} from '@components';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Search = props => {
  const navigation = useNavigation();
  const [search, setSearch] = useState(null);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

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
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate(routes.FILTER_SCREEN)}>
          {/* <Image style={styles.icons} source={icons.filter} /> */}
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Search;
