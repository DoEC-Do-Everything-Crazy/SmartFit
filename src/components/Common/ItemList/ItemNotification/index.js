import {icons} from '@assets';
import {Block} from '@components';
import React from 'react';
import {Image, Text, Pressable} from 'react-native';
import styles from './styles';

const ItemNotification = ({title, content, date, onPress}) => {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Block row>
        <Image style={styles.image} source={icons.emailNotification} />
        <Block
          flex
          paddingLeft={30}
          paddingRight={15}
          borderRadius={8}
          marginLeft={10}
          backgroundColor="#F8F8F8"
          paddingBottom={15}>
          <Block marginTop={12} row space="between">
            <Text style={styles.title}>{title}</Text>
            <Text>{date}</Text>
          </Block>
          <Block marginBottom={12}>
            <Text>{content}</Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemNotification;
