import {Block, Text} from '@components';
import {useTheme} from '@theme';
import {useSelector} from 'react-redux';
import {width} from '@utils/responsive';
import React from 'react';

const ItemMenu = ({picture, title, group_id, index}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  return (
    <Block key={index} alignCenter width={width / 6}>
      <Block
        width={48}
        height={48}
        radius={30}
        backgroundColor={theme.colors.blue}
      />
      <Text center>Food</Text>
    </Block>
  );
};

export default ItemMenu;
