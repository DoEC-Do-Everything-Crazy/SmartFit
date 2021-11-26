import {Block, Text} from '@components';

import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const ItemStep = ({...props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const {item} = props;

  return (
    <Block
      row
      padding={16}
      radius={8}
      borderWidth={2}
      borderColor={theme.colors.yellowFood}
      backgroundColor={theme.colors.white}>
      <Text size={16} fontType="bold">
        {item.content}
      </Text>
    </Block>
  );
};

export default ItemStep;
