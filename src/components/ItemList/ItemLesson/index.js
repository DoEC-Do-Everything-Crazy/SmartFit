import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemStep = ({picture, title, group_id, index}) => {
  return (
    <Block
      flex
      row
      key={index}
      marginTop={16}
      padding={16}
      radius={5}
      borderWidth={0.3}>
      <Block>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
          }}
          style={styles.image}
        />
      </Block>
      <Block marginLeft={10} width="80%">
        <Text size={20} fontType="bold">
          Step 1
        </Text>
        <Text>
          Giơ hai tay lên trời, giơ hai tay lên trời, giơ hai tay lên trời, giơ
          hai tay lên trời, giơ hai tay lên trời, giơ hai tay lên trời, giơ hai
          tay lên trời, giơ hai tay lên trời, giơ hai tay lên trời,
        </Text>
      </Block>
    </Block>
  );
};

export default ItemStep;
