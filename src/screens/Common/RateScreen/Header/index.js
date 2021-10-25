import {Block, GradientText, Text} from '@components';

import {Back} from '@assets/icons';
import {Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const Header = ({props, onPress}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  return (
    <Block style={styles.root}>
      <Block style={styles.arrowLeftBack}>
        <Pressable onPress={onPress}>
          <Back color={theme.colors.text} />
        </Pressable>
      </Block>
      {themeStore === 'light' ? (
        <Text center size={20} fontType="bold" color={theme.colors.text}>
          {t('camera')}
        </Text>
      ) : (
        <Block justifyCenter alignCenter>
          <GradientText fontSize={20} fontWeight={'bold'}>
            {t('camera')}
          </GradientText>
        </Block>
      )}
    </Block>
  );
};

export default Header;
