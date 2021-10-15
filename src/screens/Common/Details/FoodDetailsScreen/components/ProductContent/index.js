import {Block, Text} from '@components';

import {HeartPf} from '@assets/icons';
import {Image} from 'react-native';
import ItemStats from '../ItemStats';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ProductContent = ({food, props}) => {
  console.log('food', food.image);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const content = [
    {title: 'Protein', stats: '160'},
    {title: 'Carbs', stats: '45g'},
    {title: 'Vitamin', stats: 'A+'},
  ];

  const _renderItem = item => (
    <ItemStats title={item.title} stats={item.stats} />
  );
  return (
    <Block row alignCenter space="between" paddingTop={20}>
      <Block alignCenter justifyCenter width="40%">
        {content.map(_renderItem)}
        <Block alignCenter marginTop={10} marginBottom={20}>
          <HeartPf color={theme.colors.red} />
          <Text size={16}>Favorite</Text>
        </Block>
      </Block>
      <Block
        width="60%"
        style={styles.linearGradient}
        backgroundColor={theme.colors.border}>
        <Text
          center
          size={22}
          marginTop={20}
          fontType="bold"
          marginHorizontal={16}>
          {food.foodName}
        </Text>
        <Block flex alignCenter justifyCenter>
          <Image source={{uri: food.image[0]}} style={styles.image} />
          <Rating
            type="custom"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={24}
            readonly={true}
            tintColor={theme.colors.border}
          />
          <Text size={32} marginTop={5} fontType="bold">
            {`$${food.lastPrice}`}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ProductContent;
