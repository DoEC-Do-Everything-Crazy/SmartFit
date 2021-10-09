import {images} from '@assets';
import {HeartPf} from '@assets/icons';
import {Block, Text} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import ItemStats from '../ItemStats';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const ProductContent = ({data, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const _renderItem = item => (
    <ItemStats title={item.title} stats={item.stats} />
  );
  return (
    <Block row alignCenter space="between" paddingTop={20}>
      <Block alignCenter justifyCenter width="40%">
        {data.map(_renderItem)}
        <Block alignCenter marginTop={10} marginBottom={20}>
          <HeartPf color={theme.colors.red} />
          <Text size={16}>Favorite</Text>
        </Block>
      </Block>
      <Block
        width="60%"
        style={styles.linearGradient}
        backgroundColor={theme.colors.white}>
        <Text
          center
          size={22}
          marginTop={20}
          fontType="bold"
          marginHorizontal={16}>
          Mixed Vegetables
        </Text>
        <Block flex alignCenter justifyCenter>
          <Image source={images.food} style={styles.image} />
          <Rating
            type="custom"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={24}
            readonly={true}
            tintColor={theme.colors.white}
          />
          <Text size={32} marginTop={5} fontType="bold">
            $ 3,99
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ProductContent;
