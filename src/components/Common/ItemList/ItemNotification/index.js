import {icons} from '@assets';
import {Block} from '@components';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ItemNotification = ({title, content, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Block row>
        <Image style={styles.image} source={icons.emailNotification} />
        <Block
          flex
          paddingLeft={30}
          paddingRight={15}
          borderRadius={8}
          marginHorizontal={10}
          backgroundColor="#F8F8F8">
          <Block marginTop={12} row space="between">
            <Text style={styles.title}>{title}</Text>
            <Text>{date}</Text>
          </Block>
          <Text>{content}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ItemNotification;
