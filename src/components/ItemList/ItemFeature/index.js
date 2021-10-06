import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const ItemFeature = ({
  title,
  height,
  width,
  children,
  onPress,
  borderWidth,
  shadow,
  props,
}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  return (
    <Block
      shadow={shadow}
      borderWidth={borderWidth}
      justifyCenter
      width={width}
      height={height}
      borderRadius={8}
      backgroundColor="white"
      paddingVertical={10}
      marginVertical={5}
      paddingHorizontal={16}>
      <Pressable onPress={onPress}>
        <Block row space="between">
          <Text style={styles.text}>{title}</Text>
          <Block width={getSize.s(20)} justifyCenter alignCenter radius={20}>
            {children}
          </Block>
        </Block>
      </Pressable>
    </Block>
  );
};

export default ItemFeature;
