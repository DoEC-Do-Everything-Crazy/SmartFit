import {Block} from '@components';
import React from 'react';
import {Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {EmailNotification} from '@assets/icons';

const ItemNotification = ({title, content, date, onPress, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Block row>
        <Block style={styles.image}>
          <EmailNotification color={'#045694'} />
        </Block>
        <Block
          flex
          paddingLeft={30}
          paddingRight={15}
          borderRadius={8}
          marginLeft={10}
          backgroundColor={theme.colors.white}
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
