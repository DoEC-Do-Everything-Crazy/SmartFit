import {Block, Text} from '@components';

import {HeartPf} from '@assets/icons';
import {Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {images} from '@assets';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ItemCarousel = ({item, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  return (
    <Block
      justifyCenter
      radius={8}
      width={(width - 48) / 2}
      marginRight={16}
      paddingBottom={16}
      marginBottom={16}
      backgroundColor={theme.colors.border}>
      <Image source={images.image} style={styles.image} />
      <Block shadow style={styles.heartContainer}>
        <HeartPf color={theme.colors.red} />
      </Block>
      <Block paddingHorizontal={16}>
        <Block row alignCenter marginTop={10}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={18}
            tintColor={theme.colors.border}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={14} color={theme.colors.gray}>
            (3)
          </Text>
        </Block>
        <Text size={11} marginTop={8} numberOfLines={2}>
          {item.desc}
        </Text>
        <Text size={16} marginTop={8} fontType="bold">
          {item.productName}
        </Text>
        <Text size={14} marginTop={8} fontType="bold">
          {`$${item.lastPrice}`}
        </Text>
      </Block>
    </Block>
  );
};

export default ItemCarousel;
