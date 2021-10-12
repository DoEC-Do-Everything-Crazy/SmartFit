import {Block, Text} from '@components';
import {useTheme} from '@theme';
import {useSelector} from 'react-redux';
import {width} from '@utils/responsive';
import React from 'react';
import {useStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const ItemMenu = ({icon, title, group_id, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  return (
    <Block key={index} alignCenter width={width / 5}>
      {themeStore === 'dark' ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#70A2FF', '#54F0D1']}
          style={styles.item}>
          <Block width={48} height={48} radius={8} alignCenter justifyCenter>
            {icon}
          </Block>
        </LinearGradient>
      ) : (
        <Block
          width={48}
          height={48}
          radius={8}
          alignCenter
          justifyCenter
          backgroundColor={theme.colors.blue}>
          {icon}
        </Block>
      )}
      <Text color={theme.colors.text} fontType="bold" center>
        {title}
      </Text>
    </Block>
  );
};

export default ItemMenu;
