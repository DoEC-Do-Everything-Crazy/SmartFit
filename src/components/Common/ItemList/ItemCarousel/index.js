import {icons, images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemCarousel = ({picture, title, group_id, index}) => {
  return (
    <Block
      justifyCenter
      radius={16}
      width={200}
      height={300}
      padding={16}
      backgroundColor={theme.colors.yellowFood}>
      <Block row alignCenter space="between">
        <Text size={16} fontType="bold">
          Mixed
        </Text>
        <Image
          resizeMode="contain"
          source={icons.iHeart}
          style={styles.iconHeart}
        />
      </Block>
      <Text color={theme.colors.white}>Fake food, No healthy</Text>
      <Image source={images.food} style={styles.image} />
      <Block alignCenter>
        <Text size={16} fontType="bold">
          $3,99
        </Text>
        <Block
          justifyCenter
          alignCenter
          radius={30}
          width={60}
          height={30}
          marginTop={10}
          backgroundColor={theme.colors.white}>
          <Text size={13} fontType="bold">
            BUY
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemCarousel;
