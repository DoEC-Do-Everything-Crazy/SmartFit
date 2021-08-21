import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = ({image, name, date}) => {
  const {top} = useSafeAreaInsets();
  return (
    <Block row paddingVertical={16} marginHorizontal={16} marginTop={top}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Block marginHorizontal={15}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </Block>
    </Block>
  );
};

export default Header;
