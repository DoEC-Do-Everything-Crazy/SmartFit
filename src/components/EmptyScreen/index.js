import {Text} from '@components';
import React from 'react';
import {Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const EmptyScreen = ({picture, title, text, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
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
