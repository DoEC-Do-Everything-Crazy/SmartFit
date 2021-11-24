import {Block, Button, Text} from '@components';
import {Pressable, ScrollView, TouchableOpacity} from 'react-native';

import BlockBox from './components/BlockBox';
import {Cancel} from '@assets/icons';
import PriceRange from './components/PriceRange';
import React from 'react';
import data from './components/BlockBox/ListData';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const FilterScreen = props => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Block
        row
        shadow
        alignCenter
        paddingHorizontal={16}
        paddingTop={top + 10}
        paddingVertical={16}
        marginBottom={16}
        backgroundColor={theme.colors.backgroundSetting}>
        <Pressable onPress={() => navigation.goBack()}>
          <Cancel />
        </Pressable>
        <Text
          size={18}
          marginLeft={10}
          color={theme.colors.iconInf}
          fontType="bold">
          Filter Search
        </Text>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Block
          borderBottomWidth={1}
          borderBottomColor={
            themeStore === 'dark'
              ? theme.colors.border
              : theme.colors.backgroundSetting
          }
        />
        <PriceRange />
        <BlockBox data={data.Condition} category="Condition" />
        <BlockBox data={data.BuyingFormat} category="Buying Format " />
        <BlockBox data={data.ItemLocation} category="Item Location" />
        <BlockBox data={data.ShowOnly} category="Show Only" />
        <Block marginBottom={15}>
          <Button title={'Apple'} />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default FilterScreen;
