import {images} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemFood = ({picture, title, group_id, index}) => {
  return (
    <Block flex key={index} marginTop={16}>
      <Block row radius={5} borderWidth={0.3} width="100%">
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/2b/4e/3f/2b4e3f507b891744d90fdf06f1fe89e9.jpg',
          }}
          style={styles.image}
        />
        <Block marginLeft={10}>
          <Text size={20} fontType="bold">
            Step 1
          </Text>
          <Text>
            Giơ hai tay lên trời, giơ hai tay lên trời, giơ hai tay lên trời,
            giơ hai tay lên trời
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemFood;
