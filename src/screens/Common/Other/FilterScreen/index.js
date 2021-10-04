import {icons} from '@assets';
import {Cancel} from '@assets/icons';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BlockBox from './components/BlockBox';
import data from './components/BlockBox/ListData';
import PriceRange from './components/PriceRange';
import styles from './styles';

const FilterScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Block
        row
        shadow
        alignCenter
        paddingHorizontal={16}
        paddingTop={top + 10}
        paddingVertical={16}
        marginBottom={16}
        backgroundColor={theme.colors.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Cancel />
        </Pressable>
        <Text
          size={18}
          marginLeft={10}
          color={theme.colors.blue}
          fontType="bold">
          Filter Search
        </Text>
      </Block>
      <ScrollView>
        <Block borderBottomWidth={1} borderBottomColor="#EBF0FF" />
        <PriceRange />
        <BlockBox data={data.Condition} category="Condition" />
        <BlockBox data={data.BuyingFormat} category="Buying Format " />
        <BlockBox data={data.ItemLocation} category="Item Location" />
        <BlockBox data={data.ShowOnly} category="Show Only" />
        <TouchableOpacity style={styles.button}>
          <Text color={theme.colors.white} size={18}>
            Apply
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Block>
  );
};

export default FilterScreen;
