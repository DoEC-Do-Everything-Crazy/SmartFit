import {Text} from '@components';
import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const EmptyScreen = ({picture, title, text}) => {
  return (
    <View style={styles.renderRoot}>
      <Image
        source={{
          uri: picture,
        }}
        style={styles.image}
      />
      <Text style={styles.renderTitle}>{title}</Text>
      <Text style={styles.renderText}>{text}</Text>
    </View>
  );
};

export default EmptyScreen;
