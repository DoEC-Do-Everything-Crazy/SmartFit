import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';

const ItemPopular = () => {
  return (
    <Pressable style={styles.press} onPress={() => console.log('Press')}>
      <Block
        height={150}
        width={width / 3 - 20}
        marginHorizontal={8}
        borderWidth={1}
        borderRadius={8}
        marginVertical={8}
        borderColor="#FFCCB6"
        space="between">
        <Image
          style={styles.image}
          source={{
            uri: 'https://img-global.cpcdn.com/recipes/7ebf84f0d5977606/680x482cq70/healthy-food-chu%E1%BB%97i-series-gi%E1%BA%A3m-can-recipe-main-photo.jpg',
          }}
        />
        <Block>
          <Text center fontType="bold">
            Mixed Vegetables
          </Text>
        </Block>
        <Block row marginHorizontal={4} marginVertical={3} space="between">
          <Text>$3.39</Text>
          <TouchableOpacity style={styles.button}>
            <Text color="white" fontType="bold">
              +
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPopular;
