import {Block, GradientText, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

import {Back} from '@assets/icons';

const Header = ({props, onPress}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block style={styles.root}>
      <Block style={styles.arrowLeftBack}>
        <Pressable onPress={onPress}>
          <Back color={theme.colors.text} />
        </Pressable>
      </Block>
      {themeStore === 'light' ? (
        <Text center size={20} fontType="bold" color={theme.colors.text}>
          Camera
        </Text>
      ) : (
        <Block justifyCenter alignCenter>
          <GradientText fontSize={20} fontWeight={'bold'}>
            Camera
          </GradientText>
        </Block>
      )}
    </Block>
  );
};

export default Header;
